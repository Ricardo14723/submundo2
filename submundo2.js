        document.write(`

<!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - Submundo</h1>
            <p>Audio Latino, Inglés y Koreano</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Temporada 1</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
            <div class="season-title">📺 Primera Temporada</div>
            <div class="season-specs">
                <div class="season-spec">
                    <div class="spec-label">AUDIO</div>
                    <div class="spec-value">Latino EAC3 5.1</div><div class="spec-value">Ingles EAC3 5.1</div><div class="spec-value">Koreano EAC 5.1</div></div><div class="season-spec"><div class="spec-label">FORMATO</div>
                    <div class="spec-value">MKV</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">PESO TEMPORADA</div>
                    <div class="spec-value">? GB</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">RESOLUCIÓN</div>
                    <div class="spec-value">1920 x 1080</div>
                </div>
            </div>
        </div>

        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1-2</div>
                    <h3 class="episode-title">Episodios 1 y 2</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">3.92 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~110 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L0wSub1" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">3-4</div>
                    <h3 class="episode-title">Episodios 3 y 4</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">4.41 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~115 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L0wSub3" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">5-6</div>
                    <h3 class="episode-title">Episodios 5 y 6</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO&nbsp;</div>
                        <div class="episode-spec-value">4.17 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~108 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L0wSub6" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          

       <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">7</div>
                    <h3 class="episode-title">Episodio 7</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.61 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~53 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L0wSub7" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

      <!--    <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">9-10</div>
                    <h3 class="episode-title">Episodios 9 y 10&nbsp;</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">3.03 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~103 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/TerrDmF9" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div> -->
        </div>
    </div> 

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div> 
  
`);
  
