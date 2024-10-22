interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    volume: number;
    duration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    volume: 50,
    duration: 180,
    song: 'The Beatles - Hey Jude',
    details: {
        author: 'The Beatles',
        year: 1968
    }
}

const { volume, duration, song, details } = audioPlayer;
const { author } = details;

// console.log(volume);
// console.log(duration);
// console.log(song);
// console.log(author);
// console.log(year);

const bdz:string[] = ['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu'];
const [Nayeon, , , Sana, , , , , Tzuyu] = bdz;

// console.log(Nayeon);
// console.log(Tzuyu);
// console.log(Sana);


export {};