<template>
  <div>
    <div class="relative h-96 bg-gradient-to-r from-green-400 to-blue-500">
      <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        <!-- Aqui substituímos a letra "M" pela imagem -->
        <div class="w-32 h-32 rounded-full bg-border-green-400 border-4 border-green-400 mb-4 overflow-hidden">
          <img src="@/assets/images/profile.jpg" alt="Matheus Henrique Barbosa de Lima" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-3xl font-bold mb-2">Matheus Henrique Barbosa de Lima</h1>
        <h2 class="text-xl mb-4">Full Stack Developer</h2>
        <p class="mb-6 text-center max-w-lg">Desenvolvedor apaixonado por criar experiências web incríveis e intuitivas</p>
        <div class="flex space-x-4">
          <button @click="downloadCV" class="px-4 py-2 bg-white text-green-500 rounded-md font-medium flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </button>
          <router-link to="/projetos" class="px-4 py-2 bg-green-500 text-white rounded-md font-medium flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Ver Projetos
          </router-link>
        </div>
      </div>
    </div>

    <!-- O resto do componente permanece igual -->
    <div class="p-6">
      <h3 class="text-xl font-bold mb-4 text-center">Tecnologias</h3>
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">HTML5</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">CSS3</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">JavaScript</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">.NET</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React.js</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tailwind CSS</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MySQL</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PostgreSQL</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="border rounded-lg p-4 hover:border-green-500 transition-colors">
          <h4 class="font-medium flex items-center mb-2">
            <svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Skills Técnicas
          </h4>
          <ul class="text-gray-600 text-sm">
            <li class="mb-1">• HTML5 - Estruturação semântica</li>
            <li class="mb-1">• CSS3 - Layouts responsivos</li>
            <li class="mb-1">• JavaScript - Interatividade & DOM</li>
            <li>• Tailwind CSS - Design moderno</li>
          </ul>
        </div>
        
        <div class="border rounded-lg p-4 hover:border-green-500 transition-colors">
          <h4 class="font-medium flex items-center mb-2">
            <svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Soft Skills
          </h4>
          <ul class="text-gray-600 text-sm">
            <li class="mb-1">• Criatividade - Soluções inovadoras</li>
            <li class="mb-1">• Comunicação - Clara e efetiva</li>
            <li class="mb-1">• Proatividade - Iniciativa constante</li>
            <li>• Organização - Gestão eficiente</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="border rounded-lg p-4 hover:border-green-500 transition-colors">
          <h4 class="font-medium flex items-center mb-2">
            <svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Competências Técnicas
          </h4>
          <ul class="text-gray-600 text-sm">
            <li class="mb-1">• Frontend: React.js, Vue.js, HTML5, Tailwind CSS</li>
            <li class="mb-1">• Backend: .NET, Node.js, C#</li>
            <li class="mb-1">• Banco de Dados: MySQL, PostgreSQL</li>
            <li>• Cloud: AWS, Azure</li>
          </ul>
        </div>
        
        <div class="border rounded-lg p-4 hover:border-green-500 transition-colors">
          <h4 class="font-medium flex items-center mb-2">
            <svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Formação Acadêmica
          </h4>
          <ul class="text-gray-600 text-sm">
            <li class="mb-1">IFRO - Instituto Federal de Educação, Ciência e Tecnologia de Rondônia</li>
            <li class="mb-1">• 2016 - 2018 | Técnico em Informática</li>
            <li class="mb-1">IFRO - Instituto Federal de Educação, Ciência e Tecnologia de Rondônia</li>
            <li class="mb-1">• 2022 - Atual | Análise e Desenvolvimento de Sistemas</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t pt-6 text-center">
        <h4 class="font-medium mb-2">Contato</h4>
        <a href="mailto:contato@example.com" class="px-4 py-2 bg-green-500 text-white rounded-md font-medium inline-flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Enviar mensagem
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    downloadCV() {
      //alert('Download do CV iniciado!');
      const link = document.createElement('a');
      // Importa o PDF diretamente
      import('@/assets/Curriculum/CV Matheus H.pdf').then(pdfModule => {
        link.href = pdfModule.default;
        link.download = 'CV Matheus H.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }
}
</script>