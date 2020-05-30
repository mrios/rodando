import { ProjectType, LocationType, PictureType } from '../context/AppTypes';
import { v4 as uuidv4 } from 'uuid';

export default class Project implements ProjectType {
  uid: string = uuidv4();
  name: string = '';
  description: string = '';
  screenplay: string = '';
  schootingScript: string = '';
  locations: Array<LocationType> = [];
  pictures: Array<PictureType> = [];
}
