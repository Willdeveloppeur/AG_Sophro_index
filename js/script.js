m1  = document.getElementById('pointM1');
m2  = document.getElementById('pointM2');
m3  = document.getElementById('pointM3');
m4  = document.getElementById('pointM4');
m5  = document.getElementById('pointM5');
m6  = document.getElementById('pointM6');
m7  = document.getElementById('pointM7');
m8  = document.getElementById('pointM8');
m9  = document.getElementById('pointM9');
m10 = document.getElementById('pointM10');
m11 = document.getElementById('pointM11');
m12 = document.getElementById('pointM12');
m13 = document.getElementById('pointM13');
m14 = document.getElementById('pointM14');
m15 = document.getElementById('pointM15');
m16 = document.getElementById('pointM16');
m17 = document.getElementById('pointM17');
m18 = document.getElementById('pointM18');
m19 = document.getElementById('pointM19');
m20 = document.getElementById('pointM20');
m21 = document.getElementById('pointM21');
m22 = document.getElementById('pointM22');

j1  = document.getElementById('pointJ1');
j2  = document.getElementById('pointJ2');
j3  = document.getElementById('pointJ3');
j4  = document.getElementById('pointJ4');
j5  = document.getElementById('pointJ5');
j6  = document.getElementById('pointJ6');
j7  = document.getElementById('pointJ7');
j8  = document.getElementById('pointJ8');
j9  = document.getElementById('pointJ9');
j10 = document.getElementById('pointJ10');
j11 = document.getElementById('pointJ11');
j12 = document.getElementById('pointJ12');
j13 = document.getElementById('pointJ13');
j14 = document.getElementById('pointJ14');

t1 = document.getElementById('soi'); // text soi

function migrateT1() {
    t1.animate([
        { transform: 'translateX(1000%)' },
        { transform: 'translateX(0px)' }],
        {
            duration: 3500,
        });
    
}


migrateT1();
migrateM1();
function migrateM1() {
    m1.animate([
        { transform: 'translateX(-1000%)' },
        { transform: 'translateX(0px)' }],
        {
            duration: 3500,
        });

}

// migrateM2(m2, m3, m4, m5, m6, m7, m8);
setTimeout("migrateM2(m2, m3, m4, m5, m6, m7, m8)", 3500);
function migrateM2(m2, m3, m4, m5, m6, m7, m8) {
    m2.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m3.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m4.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m5.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m6.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m7.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m8.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });
    m8.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 100,
            iterations: 4,
            duration: 1500,
        });

}
// migrateJext();
setTimeout(migrateJext, 3500);
function migrateJext() {
    m16.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m17.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m18.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m19.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m20.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m21.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });
    m22.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 550,
            iterations: 4,
            duration: 1500,
        });

}
// test
// migrateJ();
setTimeout(migrateJ, 3500);
// setTimeout(migrateJ, 2000);
function migrateJ() {
    j1.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j2.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j3.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j4.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j5.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j6.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, 5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });
    j7.animate([
        { transform: 'translateX( 0%)' },
        { transform: 'translate(-5px, -5px)' },
        { transform: 'translateX(0%)' }],
        {
            delay: 350,
            iterations: 4,
            duration: 1500,
        });

}

// function for word floating "Sens"
wordOne();
function wordOne() {
    var wOne = document.getElementById('wordone');
    wOne.animate([
        { transform: 'translate(1000px, 800px)' },
        { transform: 'translate(0)' }],
        {
            duration: 7500,
        });
    wOne.style.display = 'block';
}
setTimeout(function () {
    var x = document.getElementById('sens');
    x.style.fontSize = '6vw';
    x.style.marginLeft = '68%';
    x.style.marginTop = '13.3%';
    // x.style.color = 'white';
}, 7500);


// function for word floating "RESPECT"
wordTwo();
function wordTwo() {
    var wTwo = document.getElementById('respect');
    wTwo.animate([
        { transform: 'translateX(-1000px)' },
        { transform: 'translate(0, 0)' }],
        {
            duration: 6500,
        });
}
setTimeout(function () {
    var x = document.getElementById('respect');
    x.style.fontSize = '4vw';
    x.style.marginLeft = '13%';
    x.style.marginTop = '24%';
}, 6500);