import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FileSizePipe = class FileSizePipe {
    transform(size) {
        console.log(size);
        return (size / (1024 * 1024)).toFixed(2) + 'MB';
    }
};
FileSizePipe = __decorate([
    Pipe({ name: 'filesize' })
], FileSizePipe);
export { FileSizePipe };
//# sourceMappingURL=fileSize.pipe.js.map