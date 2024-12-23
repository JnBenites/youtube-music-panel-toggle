// ==UserScript==
// @name         Toggle Blur on Music YouTube
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Aplicar o quitar desenfoque en un elemento en https://music.youtube.com
// @author       Tú
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Configura aquí el nivel de desenfoque (en píxeles)
    const blurLevel = 20; // Cambia este valor para ajustar el nivel de blur

    // Crear el botón
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '😍';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.left = '10px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.padding = '10px';
    toggleButton.style.border = 'none';
    toggleButton.style.background = '#000000';
    toggleButton.style.color = '#ffffff';
    toggleButton.style.borderRadius = '50%';
    toggleButton.style.cursor = 'pointer';

    // Insertar el botón en la página
    document.body.appendChild(toggleButton);

    // Referencia al elemento a desenfocar
    const mainPanel = document.getElementById('main-panel');

    // Verificar si el elemento existe
    if (mainPanel) {
        let isBlurred = false;

        // Agregar evento de clic al botón
        toggleButton.addEventListener('click', () => {
            isBlurred = !isBlurred;
            mainPanel.style.filter = isBlurred ? `blur(${blurLevel}px)` : 'none';
        });
    } else {
        console.warn('El elemento con ID "main-panel" no fue encontrado.');
    }
})();
