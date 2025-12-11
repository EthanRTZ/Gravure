<template>
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">
        <router-link to="/">
          <h2>⚡ Gravure PAPS</h2>
        </router-link>
      </div>
      <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
        <li><router-link to="/" @click="closeMobileMenu">Accueil</router-link></li>
        <li><router-link to="/produits" @click="closeMobileMenu">Produits</router-link></li>
        <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
      <div class="hamburger" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--primary-color);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  color: var(--white);
  font-weight: 700;
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: var(--white);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: var(--accent-color);
}

.nav-menu a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--white);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 60px;
    flex-direction: column;
    background-color: var(--primary-color);
    width: 100%;
    text-align: center;
    transition: left 0.3s ease;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>

