import { h, VNode } from 'snabbdom'
import Ctrl from './ctrl'

type VNodes = Array<string | VNode>

export default function view(ctrl: Ctrl) {

  return h('div.dosila', [
    sound(ctrl),
    notation(ctrl),
    references(ctrl)
  ])
}


function references(ctrl: Ctrl) {
  return chapter_content('References', [ul([
    li([h('a', { attrs: { href: 'https://milnepublishing.geneseo.edu/fundamentals-function-form/' } }, 'Fundamentals, Function, and Form - Theory and Analysis of Tonal Western Art Music by Andre Mount')]),
    li([h('span', 'Music in Theory and Practice Volume 1 10th Edition by Bruce Benward')]),
    li([h('span', 'The Complete Musician An Integrated Approach to Theory, Analysis, and Listening Fourth Edition by Steven G. Laitz')])
  ])])
}

function sound(ctrl: Ctrl) {
  return chapter_content('Sound', [
    h('ul', [
      h('li', strong_item('Pitch', 'highness or lowness of the sound, determined by frequency.')),
      h('li', strong_item('Intensity', 'loudness of the sound, determined by amplitude, measured in decibels.')),
      h('li', strong_item('Duration', 'length of time a pitch is sounded.')),
      h('li', strong_item('Timbre', 'quality or color of the sound, different instruments have different timbre.'))
    ])
  ])
}




function notation(ctrl: Ctrl) {
  return chapter_content('Notation', [
    p(strong_item('The staff', 'is five equally spaced horizontal lines.')),
    p(strong_item('Pitches', 'are represented as symbols positioned on the staff.')),
    p(['Pitches are referred to by the seven letters of the alphabet, ', strong('A B C D E F G'), ' .']),

    p(['Each key on a keyboard corresponds with a different pitch. The lowest pitch is on the far left, and each key to the right plays a successively higher pitch.']),


    p(strong_item('A clef', 'is a symbol placed at the beginning of the staff. It assigns one of the lines or spaces on a staff to a specific pitch.')),

    p(strong_item('Treble clef or G clef', 'symbol is a stylized G placed above middle C')),

    p(strong_item('Bass clef or F clef', 'symbol is a stylized F. The dots are placed above and below the fourth line of staff, designating the line as an F.')),

    p(['Together the treble and bass staves make a ', strong('grand staff'), '.']),

    p(['The lines of the treble clef from bottom to top are ', strong('E G B D and F'), ', or "Every Good Boy Deserves Fruit". The spaces from bottom to top are ', strong('F A C and E'), ' or "F A C E".']),

    p(['Pitches that go beyond the limits of the staff are written by adding ', strong('ledger lines'), ' above or below the staff.']),


    p(strong_item('Accidentals', 'are symbols that are placed to the left of the noteheads to indicate raising or lowering the pitch.')),
    ul([
    li(strong_item('Sharp', 'raises the pitch a half step.')),
    li(strong_item('Flat', 'lowers the pitch a half step.')),
    li(strong_item('Natural', 'cancels any previous sharp or flat and returns to the natural, unaltered pitch.')),
    li(strong_item('Double sharp, or double flat', 'raises or lowers the pitch two half steps.'))
    ]),
    p(['The notion of step is discussed later.']),


    p(strong_item('An interval', 'is the distance between two pitches.')),
    p(['There are two useful intervals ', strong('octave and semitone'), '.']),

    p(strong_item('An Octave', 'is the interval between a pitch and the next pitch above or below it with the same name.')),
    p(['There are eight white keys between and including two pitches an octave apart.']),

    p(strong_item('A semitone', 'is the interval between adjacent keys on the keyboard.')),


    p(['The pattern of black and white keys repeats every octave on the keyboard.', ' An octave is equal to 12 semitones. ',
      '(If you play all successive pitches between and including two pitches an octave apart, you would play 12 keys on the keyboard)', ' Pitches an octave apart sound similar.']),

    p(['The black keys on the keyboard, are named according to the adjacent white keys. Accidentals are used to indicate this adjacency.', ' For example, black key between A and B can be referred to as A sharp or B flat.']),
    p(strong_item('Enharmonically equivalent', 'names are when two different names refer to the same pitch.')),
    p(['Sharps and flats are not exclusive to black keys. C is enharmonically equivalent to a B sharp, or E is enharmonically equivalent to an F flat.']),

    p(['Accidentals apply to all other noteheads appearing on that line or space for the remainder of the measure, unless otherwise indicated. A natural accidental is used to cancel this convention.']),

    h3('Duration, Meter and, Rhythm'),

    p([...strong_item('Meter and rhythm', 'are patterns of duration. Meter is regularly recurring pulses of equal duration, grouped in patterns of two, three, four etc. One of the pulses is accented, or strong.'), ' Pattern of strong and weak pulses are called ', strong('beats'), '. Duple (two beats) and triple (three beats) meter are two basic meters. More on this later.']),

    p([...strong_item('Rhythm', 'is pattern of uneven durations.'),
      ' Steady beats of a meter form ', strong('measures'), ', while rhythm can be any length.']),

    p(['Each group of a meter is a ', strong('measure or a bar'), ' Vertical lines are ', strong('measure lines or bar lines'), '. Each measure is abbreviated as "m." and measures is abbreviated as "mm.".']),

  p(['Music may start with a partial measure, called an ', strong('anacrusis'), '. It is not counted in the measure numbering.']),

    p(['One whole note lasts as long as two half notes. One half note lasts as long as two quarter notes etc.']),

    p(['Symbols for quarter notes and eight notes differ by addition of the ', strong('flag'), ' attached to the stem of the eight note.', ' Shorter durations can be written by adding more flags to the stem. Each additional flag divides the previous duration in half.']),

    p(['Notes with flags are sometimes connected by ', strong('beams'), '. For clarifying the meter of the piece, and easier reading. Note that different durations can be beamed together as well.']),

    p(['To express wider variety of rhthms, for example half a note followed by three quarter notes, we can use ', strong('dots and ties')]),

    p([...strong_item('A tie', 'is a curved line that connects two adjacent notes, with the same pitch, that sounds as single sound duration of both note values.')]),

    p([...strong_item('A dot', 'is placed right of a note head. It lengthens the value of the note by half of it\'s note value.'),
      ' A dotted quarter note is equal to a regular quarter note plus an eight note.', ' Rests can be dotted as well. ', ...strong_item('A double dotted note', 'the second dot adds half of the value added by the first note.')]),

    p(['Ties can be confused with ', strong('slurs'), '. ', ...strong_item('A slur', 'is similar to a tie except it connects different pitches.'), ' Rests cannot be tied.']),

    p([...strong_item('Meter', 'is how beats are organized.'), ' A meter that puts beats in groups of two is ', strong('duple meter'), ', or in groups of three is ', strong('triple meter'), ', and in groups of four is ', strong('quadruple meter'), '.']),

    p(['A beat can also be divided. ', 'Each quarter note beat can be divided into two eight notes.',
      ' Meters that divide the beat into twos are called ', strong('simple meters'), '.',
      ' Meters that divide the beat into threes are called ', strong('compound meters'), '.']),


    p(['For example a measure is divided in two beats thus duple meter, and each beat is divided into two, thus simple meter, or ', strong('simple duple meter'), '.',
      ' A measure divided in two beats thus simple, each beat is divided into three thus compound, is ', strong('simple compound meter'), '.']),

    p(['Some music may start with an incomplete or partial measure, that is called anacrusis or ', strong('pickup measure')]),


    p([...strong_item('Time signature', 'is pair of large numbers at the beginning of the first line of staff. They indicate the meter of the music.'),
      ' The meter may change in between measures, new meter is indicated by a new time signature.',
      ' In a time signature of 3/4, 3 indicates that there are three beats per measure, and 4 indicates that each beat is the length of a quarter note.']),

    p([' Any time signature where the top number is 2, 3, or 4 is a ', strong('simple meter'), '.',
      ' For simple meters, top number indicates the number of beats per measure (duple, triple, or quadruple), and bottom number indicates the beat value.',

      ' C is a time signature shorthand for 4/4 or ', strong('common time'), '.',
      ' C/ is a time signature shorthand for 2/2 or ', strong('cut time'), '.']),

    p(['For ', strong('compound meters'), ' beat is divided into three equal durations. Each beat is a dotted note.',
      ' The upper numbers are usually 6, 9 and, 12.',
      ' In a time signature of 6/8, 8 indicates each beat is equal to a dotted quarter note, each measure has six eight notes, each beat is divided into three eight notes that is a dotted quarter note.',
      ' To find the number of beats per measure, divide the top number by three. Thus 6/8 is duple meter, 9/8 is triple meter, 12/8 is quadruple meter.',
      ' Since the bottom number indicates the duration of the beat division, add three of the bottom number to get the beat duration.',
      ' In case of 6/8, the beat duration is three of eight notes which add up to a dotted quarter note. The beat duration (or unit) of a compound meter is always a dotted note.']),



    p([...strong_item('Tuplets', 'is a generic term for rhythmic alteration.'),
      ' It can be a ', strong('triplet or a duplet'), '.',
      ' A triplet represents, a ryhthmic borrowing from, (or a temporary shift to) the compound meter. A duplet is rythmic borrowing from the simple meter.',
      ' For example in 3/4, beat can be divided into two eight notes. In 9/8, each beat can be divided into three eight notes. In 3/4, a triplet squeeze three eight notes into a  beat as if it was 9/8.',
      ' A duplet alters the ryhthm so that two notes take up the space that would normally accomodate three.'])
  ])
}

function strong_item(item: string, desc: string) {
  return [strong(item + ', '), desc]
}

function ul(nodes: VNodes) {
  return h('ul', nodes)
}

function li(nodes: VNodes) {
  return h('li', nodes)
}

function strong(item: string) {
  return h('strong', item)
}

function h3(item: string) {
  return h('h3', item)
}
function h2(item: string) {
  return h('h2', item)
}

function p(items: VNodes) {
  return h('p', items)
}

function chapter_content(chapter: string,
  content: VNodes) {

  return h('section', [
    h2(chapter),
    ...content
  ])
}


