mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnZhbm1hbmVuIiwiYSI6ImNreTI1MGNiYTBoaGUyeW9kdWFqODBoankifQ.p9v5Sx-GtlttBSWiREPMyQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ryanvanmanen/cl9g2482t001214o0omu10ky9',
        center: [ -73.926393,
      40.78422],
        minZoom: 13,  
        maxZoom: 25,
        zoom: 12.5
    });

    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');

    map.on('load', () => {
        map.addSource('NOAA 1907', {
            'type': 'tileset',
            'url': 'ryanvanmanen.9q9b1xe4' 
        });
        map.addLayer({
            'id': 'NOAA 1907',
            'source': 'NOAA 1907',
            'type': 'tileset'
        });

        slider.addEventListener('input', (e) => {
            // Adjust the layers opacity. layer here is arbitrary - this could
            // be another layer name found in your style or a custom layer
            // added on the fly using `addSource`.
            map.setPaintProperty(
                'NOAA 1907',
                'raster-opacity',
                parseInt(e.target.value, 10) / 100
            );

            // Value indicator
            sliderValue.textContent = e.target.value + '%';
        });
    });
  
  