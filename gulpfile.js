var $gulp = require('gulp');
var $sprite = require('gulp.spritesmith.x3');

$gulp.task('sprite', function() {
    return $gulp
        .src('slices/*.png')
        .pipe(
            $sprite({
                // 需要是全路径https://github.com/twolfson/gulp.spritesmith/issues/64
                retinaSrcFilter: ['slices/*@2x.png'],
                retinaImgName: 'sprite/imagesp-2x.png',
                retina3xSrcFilter: ['slices/*@3x.png'],
                retina3xImgName: 'sprite/imagesp-3x.png',
                imgName: 'sprite/imagesp.png',
                cssName: 'sprite/sprite.css'
            })
        )
        .pipe($gulp.dest('./static/images/'));
});
