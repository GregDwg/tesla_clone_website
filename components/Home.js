import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                description = "Réservez un essai sans contact"
                backgroundImg = "model-s.jpg"
                leftbtntext = " configuration personnalisée"
                rightbtntext = "véhicules disponibles"
            />
            <Section
                title = "Model Y"
                description = "Réservez un essai sans contact"
                backgroundImg = "model-y.jpg"
                leftbtntext = " configuration personnalisée"
                rightbtntext = "véhicules disponibles"
            />
            <Section
                title = "Model 3"
                description = "Réservez un essai sans contact"
                backgroundImg = "model-3.jpg"
                leftbtntext = "configuration personnalisée"
                rightbtntext = "véhicules disponibles"
            />
            <Section
                title = "Model X"
                description = "Réservez un essai sans contact"
                backgroundImg = "model-x.jpg"
                leftbtntext = "configuration personnalisée"
                rightbtntext = "véhicules disponibles"
            />

            <Section
                title = "Systèmes d'énergie solaire et Powerwalls"
                description = "de l'énergie pour tous vos besoins"
                backgroundImg = "solar-panel.jpg"
                leftbtntext = "commander maintenant"
                rightbtntext = "en savoir plus"

            />

            <Section 
                title = "Toit solaire"
                description = "Produisez de l'énergie propre à partir de votre toit"
                backgroundImg = "solar-roof.jpg"
                leftbtntext = "commander maintenant"
                rightbtntext = "en savoir plus"
            />

            <Section 
                title = "Accessoires"
                backgroundImg = "accessories.jpg"
                leftbtntext = "commander maintenant"
                rightbtntext = ""
            />
        </Container>
            
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`

