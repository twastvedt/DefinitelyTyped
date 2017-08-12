/// <reference types="webvr-api" />

import { Camera } from "./three-core";

export class VRControls {
    constructor(camera: Camera, callback?: (param: string) => void);

    /**
     * Update VR Instance Tracking
     */
    update(): void;

    zeroSensor(): void;

    /**
     * The Rift SDK returns the position in meters. This scale factor allows the user to define how meters are converted to scene units.
     */
    scale: number;

    /**
     * If true will use "standing space" coordinate system where y=0 is the floor and x=0, z=0 is the center of the room.
     */
    standing: boolean;

	/**
     * Distance from the users eyes to the floor in meters. Used when standing=true but the VRDisplay doesn't provide stageParameters.
     */
    userHeight: number;

    getVRDisplay(): VRDisplay;

    getStandingMatrix(): THREE.Matrix4;

    dispose(): void;

    setVRDisplay(display: VRDisplay): void;
}
