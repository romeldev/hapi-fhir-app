<template>
    <v-card width="360" class="mx-auto">
        <v-card-text>
            {{ scan_number }}

            <v-btn @click="search()" :loading="searching">search</v-btn>

            <pre> {{ result }}</pre>
            
            <StreamBarcodeReader
                v-if="!closeScanner"
                @decode="onDecode"
                @error="onError"
            ></StreamBarcodeReader>
        </v-card-text>
    </v-card>
    
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    components: {
        StreamBarcodeReader,
    },

    data() {
        return {
            searching: false,
            scan_number: '80346479',
            closeScanner: true,
            result: null,
        }
    },

    methods: {
        onError(error) {
            console.error(error);
        },

        onDecode(decoded) {
            if(decoded) {
                this.result = decoded;
                this.closeScanner = true;
            }
        },

        async search() {
            try {
                this.result = null;
                this.searching = true;

                // fake delay
                await this.simulateDelay(2000);

                const response = await fetch('/hapi-fhir-app/patients.json');
                const patients = await response.json();
                this.result = patients.filter(x => x.doc_number == this.scan_number);
            } catch (error) {
                console.error(error.message);
            } finally {
                this.searching = false;
            }
        },

        simulateDelay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
    }
}
</script>

<style>

</style>