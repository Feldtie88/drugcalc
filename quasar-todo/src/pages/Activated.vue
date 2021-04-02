<template>
  <q-page class="bg-grey-3 column">
  <div class="row q-pa-sm bg-primary">

    <q-input
    color="black-3"
    bg-color="white"
    label-color="black"
    outlined
    v-model="dosage"
    label="g/kg"
     style="max-width: 75px"
    :dense="dense" />
    <div class ="text-center q-pa-md bg-primary">X</div>
      <q-input
      color="black-3"
      bg-color="white"
      label-color="black"
      outlined
      v-model="weight"
      label="Weight"
       style="max-width: 75px"
      :dense="dense" />
       <div class ="text-center q-pa-md bg-primary">=</div>
       <div id="#calc">{{calc}}</div>

  <q-input
      label="calc"
      type="number"
      square
      filled
      bg-color='white'
      style="max-width: 75px"
      :dense='dense' disable readonly />
            <div class ="text-center q-pa-md bg-primary"></div>
             <q-btn round color="secondary" icon="directions" />
    </div>
     <q-list
     class="bg-black"
     separator
     bordered>
    </q-list>
    <q-list class="text-weighted text=primary">
      <h6 class="q-ma-sm">Mechanism of Action</h6>
<li>Activated charcoal adsorbs ingested toxins within the gastrointestinal tract preventing the systemic absorption of that toxin. Activated charcoal only adsorbs toxins that are in the dissolved liquid phase via direct contact. Orally administered activated charcoal does not get absorbed through the gastrointestinal lumen and acts within the gastrointestinal (GI) tract in its unchanged form.  Ingested toxins come in contact with activated charcoal if the drug has not yet been absorbed from the gastrointestinal lumen, or via recirculation of the toxin into the gut lumen by either enterohepatic recirculation, or entero-enteric recirculation through active secretion, or passive diffusion.</li>

<li>Activated charcoal adsorption of toxins is based on the equilibrium between the free toxin and the activated charcoal/toxin complex. Desorption of the toxin from activated charcoal may occur. However, in the presence of adequate doses of activated charcoal, the equilibrium is shifted towards the activated charcoal/toxin complex. This attempt to shift the equilibrium in favor of activated charcoal/toxin complexes is the rationale for dosing activated charcoal to activated charcoal: toxin ratio of 10 to 1 (see below).</li>

<li>Activated charcoal best adsorbs toxins in their nonionized forms. Polar, water-soluble molecules are less likely to be adsorbed. Due to the pharmacodynamics of activated charcoal, it best absorbs nonpolar, poorly water-soluble organic toxins.[5]</li>

<li>Most ingested toxins will have decreased systemic absorption in the presence of activated charcoal, including acetaminophen, aspirin, barbiturates, tricyclic antidepressants, theophylline, phenytoin, and a majority of inorganic and organic materials. It is important to note that activated charcoal does not effectively adsorb alcohols, metals such as iron and lithium, electrolytes such as magnesium, potassium, or sodium, and acids or alkalis due to the polarity of these substances.</li>
    </q-list>
         <q-list
     class="bg-black"
     separator
     bordered>
         </q-list>
    <q-list class="text-wieghted text=primary">
      <h6 class="q-ma-sm">Dosage</h6>
      <li>1g/kg of body weight</li>
      <li>Dosing adult: 50 to 100 g</li>
      <li>Dosing infants younger than one year: 10 to 25 g</li>
      <li>Children 2 to 12 years: 25 to 50 g</li>
      <li>Children older than 12 years: follow adult dosing</li>
    </q-list>
  </q-page>
</template>

<script>
export default {
      data(){
     return {
     dosage: null,
     weight: null,
     calc: null,

     dense: true
    }
  }
};





////////////////////////////////    methods: {
////////////////////////////////    }
</script>

<style lang="scss">


</style>
