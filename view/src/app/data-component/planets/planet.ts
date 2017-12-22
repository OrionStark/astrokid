export class Planet {
    // Planets information
    _id? : string;
    name : string;
    description : string;
    statistic : {
        rotation : number;
        revolution : number;
        rotation_spd : number;
        volume : number;
        massa : number;
        density : number;
        surface_temp : number;
        magnitude : number;
    }
    satellite : {
        natural : {
            name : string;
        }
        unnatural : {
            name : string;
        }
    }
    found : string;
}
