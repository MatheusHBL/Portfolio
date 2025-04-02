<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-center mb-4">Meus Projetos</h1>
    <p class="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
      Conheça alguns dos meus projetos recentes. Cada um representa uma oportunidade de aprendizado e crescimento profissional.
    </p>
    
    <!-- Grid de projetos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div v-for="(project, index) in projects" :key="index" 
           class="border rounded-lg overflow-hidden hover:border-green-500 transition-colors">
        <!-- Cabeçalho colorido -->
        <div class="h-32 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
          <span class="text-3xl font-bold text-white">{{ project.title.charAt(0) }}</span>
        </div>
        
        <!-- Conteúdo -->
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>
          
          <!-- Tags de tecnologias -->
          <div class="flex flex-wrap gap-1 mb-3">
            <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" 
                  class="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
              {{ tech }}
            </span>
          </div>
          
          <!-- Links -->
          <div class="flex justify-between text-sm">
            <a :href="project.demoUrl" target="_blank" class="text-green-600 hover:text-green-700 font-medium flex items-center">
              <span>Demo</span>
              <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a :href="project.repoUrl" target="_blank" class="text-gray-600 hover:text-gray-800 font-medium flex items-center">
              <span>GitHub</span>
              <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Botão voltar -->
    <div class="text-center">
      <router-link to="/" class="px-4 py-2 border border-green-500 text-green-600 rounded-md font-medium inline-flex items-center hover:bg-green-50">
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Voltar ao Perfil
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          title: 'Portfolio Pessoal',
          description: 'Website responsivo desenvolvido com Vue.js e Tailwind CSS.',
          technologies: ['Vue.js', 'Tailwind CSS', 'HTML5'],
          demoUrl: '#',
          repoUrl: 'https://github.com/MatheusHBL/Portfolio'
        },
        {
          title: 'Lista de Tarefas Simplificada',
          description: 'Uma Lista de Tarefas interativo com organização agradável.',
          technologies: ['JavaScript', 'HTML5', 'CSS'],
          //demoUrl: '#',
          repoUrl: 'https://github.com/MatheusHBL/TaskListSimplified'
        },
        {
          title: 'Landing Page',
          description: 'Landing page moderna e responsiva para conversão.',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          //demoUrl: '#',
          repoUrl: 'https://github.com/'
        },
        {
          title: 'App de Tarefas',
          description: 'Aplicativo para gerenciamento de tarefas diárias.',
          technologies: ['Vue.js', 'Vuex', 'localStorage'],
          //demoUrl: '#',
          repoUrl: 'https://github.com/'
        },
        {
          title: 'E-commerce UI',
          description: 'Interface de usuário para uma loja online moderna.',
          technologies: ['Vue.js', 'Tailwind CSS'],
          //demoUrl: '#',
          repoUrl: 'https://github.com/'
        },
        {
          title: 'Blog Tech',
          description: 'Blog pessoal sobre tecnologia e desenvolvimento web.',
          technologies: ['Vue.js', 'Markdown'],
          //demoUrl: '#',
          repoUrl: 'https://github.com/'
        }
      ]
    }
  }
}
</script>