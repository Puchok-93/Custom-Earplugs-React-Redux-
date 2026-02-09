export type TPurpose = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    priceDelta: number;
}

export type TSpecialization = {
    id: string;
    title: string;
    advantage: string;
    priceDelta: number;
    visibleFor: TPurpose['id'][];
}

export type TShape = {
    id: string;
    title: string;
    priceDelta: number;
}

export type TMaterial = {
    id: string;
    title: string;
    priceDelta: number;
}

export type TColor = {
    id: string;
    name: string;
    hex: string;
}

export type TEarplugsColor = TColor | {left: TColor; right: TColor};

export type TCoating = {
    id: string;
    name: string;
    priceDelta: number;
}

export type TPurposes = TPurpose[];
export type TSpecializations = TSpecialization[];
export type TShapes = TShape[];
export type TMaterials = TMaterial[];
export type TColors = TColor[];

export type TEarplugs = {
    purpose: TPurpose;
    specialization?: TSpecialization;
    shape: TShape;
    material: TMaterial;
    color: TEarplugsColor;
    coating: TCoating;
    cord: boolean;
};
