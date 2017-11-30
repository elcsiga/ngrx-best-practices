import {Action} from '@ngrx/store';

export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';

// STATE DEFINITION

export interface LocalizeedData {
  key: string;
  text: {
    en: string;
    hu: string;
  };
}

export interface DataState {
  animals: LocalizeedData[];
}

const initialState = {
  animals: [
    {
      key: 'bear',
      text: {
        en: 'Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. ',
        hu: 'A medvefélék nagy testű, erőteljes, lomha mozgású ragadozó emlősök, azonban veszély esetén vagy vadászatkor rendkívül gyorsan képesek futni. Egész talpuk érinti a talajt, talponjárók. Fejük nagy, orruk megnyúlt, farkuk erőteljesen visszafejlődött, rövid. Tépőfoguk nem alakult ki, zápfogaikon tompa dudorok találhatók. Vakbelük nincs, teljesen visszafejlődött. Többségük mindenevő.'
      }
    },
    {
      key: 'cat',
      text: {
        en: 'The domestic cat[1][5] (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.[6] ',
        hu: 'A macska (más néven házi macska, tudományos nevén Felis silvestris catus) egy kisebb termetű húsevő emlősállat, amely a macskafélék (Felidae) családján belül a Felis nem Felis silvestris fajához tartozik, a vadmacska alfaja, bár a mai rendszertanban inkább kezdik külön fajként kezelni az állatot, ugyanis nagyon sok dologban eltér az őseként tekintett fajtól (ez viselkedésbeli és kinézetbeli határozó is lehet). '
      }
    }
  ]
};

// REDUCER

export function dataReducer(state: DataState = initialState, action: Action): DataState {
  switch (action.type) {
    default:
      return state;
  }
}

