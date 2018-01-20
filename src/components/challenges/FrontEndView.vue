<template>
  <v-layout child-flex>
    <v-card>

      <v-tabs fixed centered v-model="activated_tab">

        <v-toolbar extended color="indigo" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title slot="extension" class="display-2">Front-End</v-toolbar-title>
        </v-toolbar>

        <v-tabs-bar color="indigo" dark>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tabs-item href="#descricao">Descrição</v-tabs-item>
          <v-tabs-item href="#dicas">Dicas</v-tabs-item>
          <v-tabs-item href="#minimo">Mínimo</v-tabs-item>

        </v-tabs-bar>

        <v-tabs-items>

          <v-tabs-content id="descricao">
            <v-card flat>
              <v-card-text>
                <p>Faremos uma SPA que faça controle de tarefas!</p>
              </v-card-text>
            </v-card>
          </v-tabs-content>

          <v-tabs-content id="dicas">
            <v-card flat>
              <v-card-text>aasdasdasdasdasdadasdas</v-card-text>
            </v-card>
          </v-tabs-content>

          <v-tabs-content id="minimo">
            <v-card flat>
              <v-card-text>aasdasdasdasdasdadasdaaaaaaaaaaaaaaaaaaaaaaaaaaaas</v-card-text>
            </v-card>
          </v-tabs-content>

        </v-tabs-items>

      </v-tabs>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      activated_tab: 'descricao',
    }),
  };
</script>
