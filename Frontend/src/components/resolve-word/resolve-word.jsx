import React, { useEffect } from 'react';

const RandomQuoteResolver = ({ resolveWord }) => {
  useEffect(() => {
    function resolveRandomQuote(options, callback) {
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      }

      function doRandomiserEffect(options, callback) {
        const { characters, timeout, element, partialString, iterations } = options;
        let currentIterations = iterations;

        setTimeout(() => {
          if (currentIterations >= 0) {
            const nextOptions = { ...options, iterations: currentIterations - 1 };

            if (currentIterations === 0) {
              element.textContent = partialString ?? '';
            } else {
              element.textContent = (partialString ?? '').substring(0, (partialString ?? '').length - 1) + randomCharacter(characters);
            }

            doRandomiserEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        }, timeout);
      }

      function doResolverEffect(options, callback) {
        const { resolveString, offset } = options;

        if (offset <= resolveString.length) {
          const partialString = resolveString.substring(0, offset);
          const combinedOptions = { ...options, partialString };

          doRandomiserEffect(combinedOptions, () => {
            const nextOptions = { ...options, offset: offset + 1 };
            doResolverEffect(nextOptions, callback);
          });
        } else if (typeof callback === "function") {
          callback();
        }
      }

      doResolverEffect(options, callback);
    }

    const options = {
      offset: 0,
      timeout: 5,
      iterations: 10,
      characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      resolveString: resolveWord || '', // Usa la palabra proporcionada o una cadena vacía por defecto
      element: document.querySelector('[data-target-resolver]'),
    };

    function callback() {
      // Detener el efecto después de la primera iteración
      // Comenta esta línea si deseas que el efecto continúe de forma infinita.
      return;
    }

    resolveRandomQuote(options, callback);

    // Limpieza cuando se desmonta el componente
    return () => {
      // Puedes agregar aquí alguna lógica de limpieza si es necesario
      // Por ejemplo, detener el efecto de resolución aleatoria antes de desmontar el componente.
    };
  }, [resolveWord]); // Agrega resolveWord al array de dependencias para que el efecto se ejecute cuando cambie

  return (
    <div className="container">
      <h1 className="word" data-target-resolver></h1>
    </div>
  );
};

export default RandomQuoteResolver;
