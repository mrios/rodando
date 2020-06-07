import { ProjectType } from '../state-containers/projects/ProjectTypes';

// TODO: improve this function to recibe a prefix and in
export const getUUIDFromURL = (pathname: string): string => {
  const pattern = `^/([a-zA-Z0-9_-]+)/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})`;
  var matched = new RegExp(pattern, 'g').exec(pathname);
  return matched && matched[2] ? matched[2].toString() : '';
};

export const getLocalImage = (
  baseURL: string,
  project: ProjectType
): string => {
  // return project.profileImage && project.profileImage.url
  //   ? require(`${baseURL}fake-data/uploads/projects/${
  //       project.profileImage && project.profileImage.url
  //     }`)
  //   : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
  return 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
};
