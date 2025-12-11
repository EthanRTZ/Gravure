<template>
  <div class="home">
    <!-- Hero Section avec image de fond -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>Gravure Laser de Précision</h1>
        <p class="hero-subtitle">Spécialiste en médailles personnalisées pour vos événements sportifs</p>
        <router-link to="/contact" class="cta-button">Contactez-nous</router-link>
      </div>
      <div class="scroll-indicator" @click="scrollToAbout">
        <div class="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Découvrir</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" ref="aboutSection">
      <div class="container">
        <h2>À Propos de Gravure PAPS</h2>
        <p class="about-text">
          Nous sommes spécialisés dans la gravure laser de haute précision pour créer des médailles uniques
          et durables pour vos courses et événements sportifs. Avec notre technologie de pointe et notre
          attention aux détails, chaque médaille devient une œuvre d'art personnalisée que vos participants
          chériront pour toujours.
        </p>
        <div class="features">
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <h3>Rapidité</h3>
            <p>Délais de production courts sans compromis sur la qualité</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎯</div>
            <h3>Précision</h3>
            <p>Gravure laser ultra-précise pour des détails parfaits</p>
          </div>
          <div class="feature">
            <div class="feature-icon">✨</div>
            <h3>Personnalisation</h3>
            <p>Designs sur mesure adaptés à votre événement</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Examples Section -->
    <section class="examples">
      <div class="container">
        <h2>Nos Réalisations</h2>
        <p class="section-subtitle">Découvrez quelques exemples de nos médailles gravées</p>
        <div class="gallery">
          <div class="gallery-item" v-for="example in examples" :key="example.id">
            <div class="gallery-image">
              <div class="placeholder-image">{{ example.icon }}</div>
            </div>
            <h3>{{ example.title }}</h3>
            <p>{{ example.description }}</p>
          </div>
        </div>
        <div class="cta-section">
          <router-link to="/produits" class="secondary-button">Voir tous nos produits</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      examples: [
        {
          id: 1,
          icon: '🏃',
          title: 'Marathon de Ville',
          description: 'Médailles personnalisées avec logo et temps de course'
        },
        {
          id: 2,
          icon: '🚴',
          title: 'Course Cycliste',
          description: 'Médailles en métal avec gravure détaillée'
        },
        {
          id: 3,
          icon: '🏆',
          title: 'Triathlon',
          description: 'Médailles sur mesure pour événement multi-sports'
        },
        {
          id: 4,
          icon: '🎖️',
          title: 'Course Caritative',
          description: 'Médailles personnalisées pour cause humanitaire'
        }
      ]
    }
  },
  methods: {
    scrollToAbout() {
      this.$refs.aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-image: url('https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(52, 73, 94, 0.75) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3.5rem;
  color: var(--white);
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 1s ease-out;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out 0.3s both;
}

.cta-button {
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  animation: fadeInUp 1s ease-out 0.6s both;
}

.cta-button:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  text-align: center;
  animation: fadeIn 1s ease-out 1s both;
}

.scroll-indicator p {
  color: var(--white);
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.scroll-arrow {
  width: 30px;
  height: 50px;
  margin: 0 auto;
  position: relative;
}

.scroll-arrow span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
  animation: scrollArrow 2s infinite;
  box-sizing: border-box;
}

.scroll-arrow span:nth-child(2) {
  top: 12px;
  animation-delay: -0.2s;
}

.scroll-arrow span:nth-child(3) {
  top: 24px;
  animation-delay: -0.4s;
}

@keyframes scrollArrow {
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(-10px, -10px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(-45deg) translate(10px, 10px);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.about {
  padding: 4rem 0;
  background-color: var(--white);
}

.about h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.about-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  background-color: var(--light-bg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.feature p {
  color: #666;
}

.examples {
  padding: 4rem 0;
  background-color: var(--light-bg);
}

.examples h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.gallery-item {
  background-color: var(--white);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  margin-bottom: 1.5rem;
}

.placeholder-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.gallery-item h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.gallery-item p {
  color: #666;
  font-size: 0.95rem;
}

.cta-section {
  text-align: center;
  margin-top: 3rem;
}

.secondary-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--white);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background-color: #e67e22;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(243, 156, 18, 0.3);
}

@media (max-width: 768px) {
  .hero {
    height: 100vh;
    min-height: 500px;
    background-attachment: scroll;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 0.95rem;
  }

  .scroll-indicator {
    bottom: 20px;
  }

  .about h2,
  .examples h2 {
    font-size: 2rem;
  }
}
</style>

