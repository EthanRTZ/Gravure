<template>
  <div class="contact">
    <section class="page-header">
      <div class="container">
        <h1>Contactez-nous</h1>
        <p>Nous sommes à votre écoute pour réaliser vos projets</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Informations de Contact</h2>
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <h3>Adresse</h3>
                <p>123 Rue de la Gravure<br>75000 Paris, France</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>contact@gravurepaps.fr</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div>
                <h3>Horaires</h3>
                <p>Lundi - Vendredi: 9h00 - 18h00<br>Samedi: 10h00 - 16h00<br>Dimanche: Fermé</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Suivez-nous</h3>
              <div class="social-links">
                <a href="#" class="social-link facebook">
                  <span class="social-icon">📘</span>
                  Facebook
                </a>
                <a href="#" class="social-link instagram">
                  <span class="social-icon">📷</span>
                  Instagram
                </a>
                <a href="#" class="social-link linkedin">
                  <span class="social-icon">💼</span>
                  LinkedIn
                </a>
                <a href="#" class="social-link twitter">
                  <span class="social-icon">🐦</span>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <h2>Envoyez-nous un Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Nom Complet *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
              <div class="form-group">
                <label for="subject">Sujet *</label>
                <select id="subject" v-model="formData.subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Demande d'information</option>
                  <option value="custom">Projet personnalisé</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  placeholder="Décrivez-nous votre projet..."
                ></textarea>
              </div>
              <button type="submit" class="submit-button">
                {{ submitText }}
              </button>
              <p v-if="submitSuccess" class="success-message">
                ✓ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (placeholder) -->
    <section class="map-section">
      <div class="container">
        <h2>Où nous trouver</h2>
        <div class="map-placeholder">
          <p>🗺️ Plan d'accès</p>
          <p class="map-info">123 Rue de la Gravure, 75000 Paris</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      submitSuccess: false,
      submitText: 'Envoyer le message'
    }
  },
  methods: {
    submitForm() {
      this.submitText = 'Envoi en cours...'

      // Simulation d'envoi (remplacer par un vrai appel API)
      setTimeout(() => {
        this.submitSuccess = true
        this.submitText = 'Envoyer le message'

        // Réinitialiser le formulaire
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          this.submitSuccess = false
        }, 5000)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, #34495e 100%);
  color: var(--white);
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-section {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

.contact-info h2,
.contact-form-container h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.info-icon {
  font-size: 2.5rem;
  min-width: 50px;
}

.info-item h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-item p {
  color: #666;
  line-height: 1.6;
}

.social-section {
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.social-section h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background-color: var(--light-bg);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-icon {
  font-size: 1.5rem;
}

.social-link.facebook:hover { background-color: #4267B2; color: white; }
.social-link.instagram:hover { background-color: #E1306C; color: white; }
.social-link.linkedin:hover { background-color: #0077B5; color: white; }
.social-link.twitter:hover { background-color: #1DA1F2; color: white; }

.contact-form-container {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.9rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.submit-button:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.success-message {
  background-color: #27ae60;
  color: var(--white);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-top: 1rem;
}

.map-section {
  padding: 4rem 0;
  background-color: var(--light-bg);
}

.map-section h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.map-placeholder {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 3rem;
}

.map-info {
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.9;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .social-links {
    grid-template-columns: 1fr;
  }
}
</style>

