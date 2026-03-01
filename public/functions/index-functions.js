import { UIController } from './UIcontroller.js';
import { initSwiper } from './carrousel.js';

const ui = new UIController();

export const initIndex = () => {
    initSwiper();
    ui.setupNavbarEvents();
    ui.setupFooterEvents();
    ui.applyCardEffects();
};

export const initDef = () => {
    ui.setupNavbarEvents();
    ui.setupFooterEvents();
    ui.setupBody();
}