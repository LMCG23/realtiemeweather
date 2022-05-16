import { Clouds } from "./Clouds.model";
import { Coord } from "./cord.model";
import { Main } from "./Main.model";
import { Sys } from "./Sys.model";
import { WeatherBase } from "./WeatherBase.model";
import { Wind } from "./Wind.model";

export class WeatherData {
    coord?: Coord;
    weather: WeatherBase[] = [];
    base?: string;
    main: Main = new Main();
    visibility ?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys: Sys = new Sys();
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
}

















