<template>
    <v-card width="360" 
        class="mx-auto"
        subtitle="Barcode Scanner"
        :title="_patientName"
        elevation="12"
    >
        <template #prepend>
            <v-avatar color="grey">
                <v-icon icon="mdi-account"></v-icon>
            </v-avatar>
        </template>

        <template #append>
            <v-btn
                variant="text"
                icon="mdi-reload"
                @click="getPatient"
            ></v-btn>
        </template>

        <v-card-text>
            <pre>{{ patient }}</pre>
            <!-- <barcode
                :v-bind:value="patient?.doc_number" format="CODE128" options
            >
                Show this if the rendering fails.
            </barcode> -->
        </v-card-text>
    </v-card>
</template>

<script>
import VueBarcode from 'vue-barcode';
export default {
    components: {
        'barcode': VueBarcode
    },
    data() {
        return {
            loading: false,
            patient: null,
        }
    },

    mounted() {
        this.getPatient()
    },

    computed: {
        _patientName() {
            if(!this.patient) {
                return 'Cargando...';
            }
            return `${this.patient.given1} ${this.patient.family1}`;
        }
    },

    methods: {
        async getPatient() {
            try {
                this.loading = null;
                this.patient = null;
                const response = await fetch('/hapi-fhir-app/patients.json');
                const patients = await response.json();
                //obtener un paciente al azar
                const randomIndex = Math.floor(Math.random() * patients.length);
                this.patient = patients[randomIndex];
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
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