import { type } from '../../util';

export const ActionTypes = {
    ADD_IMAGE: type('[Images] Add Image'),
    EDIT_IMAGE: type('[Images] Edit Image'),
    LOAD: type('[Images] Load'),
    LOAD_SUCCESS: type('[Images] Load Success'),
    LOAD_FAIL: type('[Images] Load Fail'),
    SAVE_IMAGE: type('[Images] Save Image'),
    SAVE_IMAGE_SUCCESS: type('[Images] Save Image Success'),
    SAVE_IMAGE_FAIL: type('[Images] Save Image Fail'),
    SELECT_IMAGE: type('[Images] Select Image'),
    SELECT_MONTH: type('[Images] Select Month'),
};