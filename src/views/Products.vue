<template>
  <div class="products">
    <section class="page-header">
      <div class="container">
        <h1>Nos Produits</h1>
        <p>Découvrez notre gamme complète de médailles gravées au laser</p>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="filters">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="{ active: selectedCategory === category }"
            class="filter-button"
          >
            {{ category }}
          </button>
        </div>

        <div class="products-grid">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-card"
          >
            <div class="product-image">
              <div class="placeholder-image">{{ product.icon }}</div>
              <span class="product-badge" v-if="product.popular">Populaire</span>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="product-category">{{ product.category }}</p>
              <p class="product-description">{{ product.description }}</p>
              <ul class="product-features">
                <li v-for="(feature, index) in product.features" :key="index">
                  ✓ {{ feature }}
                </li>
              </ul>
              <div class="product-footer">
                <span class="product-price">{{ product.price }}</span>
                <router-link to="/contact" class="contact-button">Commander</router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="no-products">
          <p>Aucun produit trouvé dans cette catégorie.</p>
        </div>
      </div>
    </section>

    <section class="custom-section">
      <div class="container">
        <div class="custom-content">
          <h2>Besoin d'une Création Sur Mesure ?</h2>
          <p>Nous créons des médailles personnalisées adaptées à vos besoins spécifiques. Contactez-nous pour discuter de votre projet !</p>
          <router-link to="/contact" class="cta-button">Demander un Devis</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      selectedCategory: 'Tous',
      categories: ['Tous', 'Médailles de Course', 'Médailles Cyclisme', 'Médailles Triathlon', 'Médailles Personnalisées'],
      products: [
        {
          id: 1,
          name: 'Médaille Marathon Standard',
          category: 'Médailles de Course',
          icon: '🏃',
          description: 'Médaille classique pour marathon avec gravure personnalisée',
          features: ['Métal de qualité', 'Gravure recto-verso', 'Ruban inclus', 'Diamètre 7cm'],
          price: 'À partir de 5€',
          popular: true
        },
        {
          id: 2,
          name: 'Médaille Marathon Premium',
          category: 'Médailles de Course',
          icon: '🏃‍♀️',
          description: 'Médaille haut de gamme avec finition brillante',
          features: ['Métal premium', 'Gravure laser précise', 'Ruban premium', 'Diamètre 8cm'],
          price: 'À partir de 8€',
          popular: true
        },
        {
          id: 3,
          name: 'Médaille 5K/10K',
          category: 'Médailles de Course',
          icon: '🎽',
          description: 'Parfaite pour les courses courtes et moyennes distances',
          features: ['Design sportif', 'Légère et durable', 'Gravure personnalisée', 'Diamètre 6cm'],
          price: 'À partir de 4€',
          popular: false
        },
        {
          id: 4,
          name: 'Médaille Course Cycliste',
          category: 'Médailles Cyclisme',
          icon: '🚴',
          description: 'Médaille spécialement conçue pour les événements cyclistes',
          features: ['Design cyclisme', 'Métal résistant', 'Gravure détaillée', 'Diamètre 7.5cm'],
          price: 'À partir de 6€',
          popular: false
        },
        {
          id: 5,
          name: 'Médaille VTT',
          category: 'Médailles Cyclisme',
          icon: '🚵',
          description: 'Pour les compétitions de vélo tout terrain',
          features: ['Design robuste', 'Finition antique', 'Gravure relief', 'Diamètre 7cm'],
          price: 'À partir de 6.5€',
          popular: false
        },
        {
          id: 6,
          name: 'Médaille Triathlon',
          category: 'Médailles Triathlon',
          icon: '🏊',
          description: 'Médaille multi-sports pour triathlon',
          features: ['3 sports gravés', 'Design unique', 'Finition premium', 'Diamètre 8cm'],
          price: 'À partir de 9€',
          popular: true
        },
        {
          id: 7,
          name: 'Médaille Ironman',
          category: 'Médailles Triathlon',
          icon: '💪',
          description: 'Pour les épreuves de triathlon longue distance',
          features: ['Design prestige', 'Métal haute qualité', 'Gravure complexe', 'Diamètre 9cm'],
          price: 'À partir de 12€',
          popular: false
        },
        {
          id: 8,
          name: 'Médaille Personnalisée',
          category: 'Médailles Personnalisées',
          icon: '⭐',
          description: 'Création 100% sur mesure selon vos besoins',
          features: ['Design unique', 'Logo personnalisé', 'Forme au choix', 'Taille personnalisée'],
          price: 'Sur devis',
          popular: true
        },
        {
          id: 9,
          name: 'Médaille Entreprise',
          category: 'Médailles Personnalisées',
          icon: '🏢',
          description: 'Médailles pour événements d\'entreprise',
          features: ['Branding entreprise', 'Finition professionnelle', 'Packaging inclus', 'Diamètre 7cm'],
          price: 'Sur devis',
          popular: false
        },
        {
          id: 10,
          name: 'Médaille Caritative',
          category: 'Médailles Personnalisées',
          icon: '❤️',
          description: 'Pour vos événements caritatifs et solidaires',
          features: ['Prix solidaire', 'Design personnalisé', 'Message gravé', 'Diamètre 7cm'],
          price: 'À partir de 4.5€',
          popular: false
        },
        {
          id: 11,
          name: 'Médaille Trail',
          category: 'Médailles de Course',
          icon: '⛰️',
          description: 'Spécialement conçue pour les courses nature',
          features: ['Design montagne', 'Métal robuste', 'Gravure paysage', 'Diamètre 7.5cm'],
          price: 'À partir de 7€',
          popular: false
        },
        {
          id: 12,
          name: 'Médaille Enfants',
          category: 'Médailles Personnalisées',
          icon: '👶',
          description: 'Médailles colorées pour courses enfants',
          features: ['Design ludique', 'Couleurs vives', 'Sécurité enfant', 'Diamètre 6cm'],
          price: 'À partir de 3.5€',
          popular: false
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === 'Tous') {
        return this.products
      }
      return this.products.filter(product => product.category === this.selectedCategory)
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

.products-section {
  padding: 4rem 0;
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-button {
  padding: 0.7rem 1.5rem;
  background-color: var(--white);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-button:hover,
.filter-button.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  overflow: hidden;
}

.placeholder-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.product-category {
  color: var(--accent-color);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.product-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.product-features {
  list-style: none;
  margin-bottom: 1.5rem;
}

.product-features li {
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.product-price {
  font-weight: 700;
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.contact-button {
  background-color: var(--accent-color);
  color: var(--white);
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background-color: #e67e22;
  transform: scale(1.05);
}

.no-products {
  text-align: center;
  padding: 3rem;
  color: #999;
  font-size: 1.1rem;
}

.custom-section {
  background: linear-gradient(135deg, var(--accent-color) 0%, #e67e22 100%);
  color: var(--white);
  padding: 4rem 0;
  margin-top: 4rem;
}

.custom-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.custom-content h2 {
  color: var(--white);
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.custom-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  background-color: var(--white);
  color: var(--accent-color);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-button {
    width: 100%;
  }
}
</style>

