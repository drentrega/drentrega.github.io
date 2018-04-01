<template>
  <v-layout child-flex>
    <v-card>

      <v-tabs fixed centered v-model="activated_tab">

        <v-toolbar extended color="indigo" dark flat>
          <v-spacer></v-spacer>
          <v-toolbar-title slot="extension" class="display-2">Front-End</v-toolbar-title>
        </v-toolbar>

        <v-container>
          <v-expansion-panel popout>

            <v-expansion-panel-content>
              <div slot="header">Descrição</div>
              <v-card>
                <v-card-text class="grey lighten-3 text-xs-center">
                  <p>
                    Faremos uma  <v-chip label class="inline">SPA</v-chip> que faça <b>controle de tarefas</b> em Vue!
                    Para isso é necessário o uso do <v-chip label class="inline">vue-cli</v-chip> para montar a
                    estrutura básica do nosso projeto.
                  </p>
                  <p>
                    Não se esqueça de fazer uma camada de persistência para salvar os dados temporários. A melhor forma
                    tende a ser o storage do próprio browser!
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header">Funcionalidades</div>
              <v-card>
                <v-card-text class="grey lighten-3">

                  <v-container fluid grid-list-md>
                    <v-layout row wrap>

                      <v-flex d-flex xs12 sm6>
                        <v-layout row wrap>

                          <v-flex d-flex>
                            <v-card color="red darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">CRUD de Tarefas</div>
                              </v-card-title>
                              <v-container>
                                <p>
                                  <b>Sugestão de fluxo</b><br>
                                  1 - Abre uma modal com formulário<br>
                                  2 - Salva elemento <v-chip label class="inline">Tarefa</v-chip> em lista de tarefas<br>
                                </p>
                                <p>
                                  <b>Sugestão de estrutura para a </b><v-chip label class="inline">Tarefa</v-chip><br>
                                  - Descrição<br>
                                  - Data & hora que a tarefa acontecerá<br>
                                  - Tempo de duração em minutos (natural, múltiplo de 5)<br>
                                  - Lembrete de X​ minutos antes (X é natural, múltiplo de 5)<br>
                                  - Data & hora de criação da tarefa<br>
                                  - Data & hora de criação da última edição<br>
                                  - Data & hora de remoção<br>
                                  - Lista de <v-chip label class="inline">Tag</v-chip>
                                </p>
                              </v-container>
                            </v-card>
                          </v-flex>

                          <v-flex d-flex>
                            <v-card color="deep-purple darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">Listagem de Tarefas</div>
                              </v-card-title>
                              <v-container>
                                <p>
                                  - Visualização por: [dia (padrão), semana e mês]<br>
                                  - Filtro de tarefas: [realizadas ou não realizadas (padrão)]
                                </p>
                              </v-container>
                            </v-card>
                          </v-flex>

                          <v-flex d-flex>
                            <v-card color="cyan darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">Notificações</div>
                              </v-card-title>
                              <v-card-text>
                                Use a API do Google Chrome para disparar lembretes das tarefas que tem lembretes!
                              </v-card-text>
                            </v-card>
                          </v-flex>

                        </v-layout>
                      </v-flex>

                      <v-flex d-flex xs12 sm6>
                        <v-layout row wrap>

                          <v-flex d-flex>
                            <v-card color="pink darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">Busca de Tarefas</div>
                              </v-card-title>
                              <v-container>
                                <p>
                                  Campo de texto de busca faz filtro de títulos de <v-chip label class="inline">Tarefa</v-chip>.
                                </p>
                              </v-container>
                            </v-card>
                          </v-flex>

                          <v-flex d-flex>
                            <v-card color="purple darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">CRUD de Tags</div>
                              </v-card-title>
                              <v-container>
                                <p>
                                  <b>Sugestão de fluxo</b><br>
                                  1 - Abre uma modal com formulário<br>
                                  2 - Salva elemento <v-chip label class="inline">Tag</v-chip> em lista de tarefas<br>
                                </p>
                                <p>
                                  <b>Sugestão de estrutura para a </b><v-chip label class="inline">Tag</v-chip><br>
                                  - ID único<br>
                                  - Descrição<br>
                                  - Data & hora de criação<br>
                                  - Data & hora da última edição<br>
                                  - Data & hora de remoção<br>
                                </p>
                              </v-container>
                            </v-card>
                          </v-flex>

                          <v-flex d-flex>
                            <v-card color="indigo darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">Busca por Tags</div>
                              </v-card-title>
                              <v-card-text>
                                Campo de texto de busca faz filtro de <v-chip label class="inline">Tarefas</v-chip> que
                                possuem <v-chip label class="inline">Tag</v-chip> específica.
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex d-flex>
                            <v-card color="teal darken-3" class="white--text">
                              <v-card-title primary-title>
                                <div class="headline">Dashboard</div>
                              </v-card-title>
                              <v-card-text>
                                <p>
                                  Crie um dashboard que mostre dados que você considerar relevantes para análises!
                                </p>
                                <p>
                                  <b>Exemplo 1:</b> um gráfico pizza de <v-chip label class="inline">Tarefas</v-chip> pelo critério de
                                  Realizadas vs Não Realizadas.
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                        </v-layout>
                      </v-flex>

                    </v-layout>
                  </v-container>

                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header">Primeiros Passos</div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p class="text-xs-center">
                    Para começar instale o <v-chip label class="inline">vue-cli</v-chip> e peça para gerar um projeto
                    padrão.
                  </p>
                  <v-alert dark color="grey darken-3" icon="code" :value="true">
                    <pre>npm i -g vue-cli<br>vue init webpack fj-challenge<br>cd fj-challenge<br>npm install<br>npm run dev</pre>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header">Entrega</div>
              <v-card>
                <v-card-text class="grey lighten-3 text-xs-center">
                  Enviar um e-mail para <v-chip label class="inline">talentos@drentrega.com.br</v-chip> com a url do
                  repositório do seu projeto.
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-container>

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

<style scoped>
.inline {
  max-height: 1.7em;
}
</style>
