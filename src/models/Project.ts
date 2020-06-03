import { ProjectType, LocationType, PictureType } from '../context/AppTypes';
import { v4 as uuidv4 } from 'uuid';

export default class Project implements ProjectType {
  uid?: string = uuidv4();
  name?: string = '';
  description?: string = '';
  screenplay?: string = '';
  shootingScript?: string = '';
  locations?: Array<LocationType> = [];
  pictures?: Array<PictureType> = [];

  constructor({
    uid,
    name,
    description,
    screenplay,
    shootingScript,
    locations,
    pictures,
  }: ProjectType) {
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.screenplay = screenplay;
    this.shootingScript = shootingScript;
    this.locations = locations;
    this.pictures = pictures;
  }
}
