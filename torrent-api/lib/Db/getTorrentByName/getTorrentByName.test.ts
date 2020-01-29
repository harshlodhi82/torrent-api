import getTorrentByName from './index'
import Db from '../Db'
import {dbPath} from '../fixtures'

const expectedRes = {
  name: 'Black Sabbath Discography (2016) @320kbps',
  size: 3758096384,
  categories: 'Audio:Music',
  createdAt: '2016-08-16',
  files: [
    {
      path: 'Black Sabbath Discography (2016) '
        + "@320kbps/Black Sabbath/Vogard7A's Black "
        + 'Sabbath Picks.m3u8',
      size: 2561
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/Cross Purposes.jpg',
      size: 27723
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2007 - '
        + 'Live at Hammersmith Odeon [Live]/Live at Hammersmith Odeon.jpg',
      size: 31464
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/Cross Purposes '
        + 'Live.jpg',
      size: 41108
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1998 - Reunion '
        + '[Live]/Reunion.JPG',
      size: 49027
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/Heaven and '
        + 'Hell.jpg',
      size: 50311
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2016 - The End '
        + '[EP]/The End.jpg',
      size: 50714
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. '
        + '4/Vol. 4.jpg',
      size: 57193
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/The Eternal '
        + 'Idol.jpg',
      size: 67296
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/Past Lives.jpg',
      size: 70671
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/Master of '
        + 'Reality.jpg',
      size: 70726
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1970b - '
        + 'Paranoid/Paranoid.jpg',
      size: 73410
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/Never Say Die!.jpg',
      size: 76352
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1986 - Seventh '
        + 'Star/Seventh Star.jpg',
      size: 81805
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1983 - Born '
        + 'Again/Born Again.jpg',
      size: 84307
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - '
        + '13/13.jpg',
      size: 84781
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/Headless Cross.jpg',
      size: 91683
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - '
        + 'Tyr/Tyr.jpg',
      size: 94342
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1992 - '
        + 'Dehumanizer/Dehumanizer.JPG',
      size: 94873
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/Live Evil.jpg',
      size: 96408
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a - '
        + 'Live... Gathered in Their Masses [Live]/Live... Gathered in Their '
        + 'Masses.jpg',
      size: 96822
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1976 - Technical Ecstasy/Technical '
        + 'Ecstasy.jpg',
      size: 98599
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/Sabbath Bloody '
        + 'Sabbath.jpg',
      size: 99345
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1995 - '
        + 'Forbidden/Forbidden.jpg',
      size: 122608
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1975 - '
        + 'Sabotage/Sabotage.jpg',
      size: 131215
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1981 - Mob Rules/Mob '
        + 'Rules.jpg',
      size: 150949
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/Black Sabbath.jpg',
      size: 166311
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-03 - '
        + 'Embryo.mp3',
      size: 1202170
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1983 - Born Again/04 - '
        + 'The Dark.mp3',
      size: 1899333
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1975 - Sabotage/02 - Don't Start (Too "
        + 'Late).mp3',
      size: 2115612
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-06 - Fluff.mp3',
      size: 2509129
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/01 - The Gates of '
        + 'Hell.mp3',
      size: 2776088
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1990 - Tyr/05 - The Battle of Tyr.mp3',
      size: 2850345
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/04 - Sphinx (The '
        + 'Guardian).mp3',
      size: 2946615
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/01 - '
        + 'E5150.mp3',
      size: 3154759
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-05 - '
        + 'Orchid.mp3',
      size: 3714061
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1995 - '
        + 'Cross Purposes Live [Live]/10 - Headless Cross (Drum Intro).mp3',
      size: 3775558
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/2-06 - Orchid (Studio '
        + 'Outtake).mp3',
      size: 4094833
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/04 - '
        + 'FX.mp3',
      size: 4203191
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/02 - Stonehenge.mp3',
      size: 4818786
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/07 - Scarlet '
        + 'Pimpernel.mp3',
      size: 5096456
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-01 - E5150.mp3',
      size: 5744118
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1972 - Vol. 4/09 - St. Vitus Dance.mp3',
      size: 6056866
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/1-07 - Rat Salad.mp3',
      size: 6129441
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-07 - Rat Salad (Alternate '
        + 'Mix).mp3',
      size: 6146740
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/08 - Breakout.mp3',
      size: 6290145
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/09 - In Memory.mp3',
      size: 6310098
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/06 - '
        + "Odin's Court.mp3",
      size: 6613002
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1970b '
        + '- Paranoid/2-02 - Paranoid (Alternative Lyrics Version).mp3',
      size: 6958656
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1970b - Paranoid/1-02 - '
        + 'Paranoid.mp3',
      size: 6978984
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1972 - Vol. 4/08 - Laguna Sunrise.mp3',
      size: 7093402
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1981 - Mob Rules/04 - '
        + 'E5150.mp3',
      size: 7130879
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/11 - Loser Gets It All (bonus '
        + 'track).mp3',
      size: 7153117
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/2-01 - Weevil Woman '
        + "'71.mp3",
      size: 7268102
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1994 - Cross Purposes/11 - What's the Use (bonus "
        + 'track).mp3',
      size: 7370822
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/06 - '
        + 'Psychophobia.mp3',
      size: 7397136
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/2002 - Past Lives [Live]/1-01 - Tomorrow's "
        + 'Dream.mp3',
      size: 7436288
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/08 - Angry Heart.mp3',
      size: 7571292
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-09 - Selling My '
        + 'Soul.mp3',
      size: 7647026
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1972 - Vol. 4/02 - Tomorrow's Dream.mp3",
      size: 7724525
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1987 '
        + '- The Eternal Idol/10 - Some Kind of Woman (bonus track).mp3',
      size: 7751671
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/03 - '
        + 'Psychophobia.mp3',
      size: 7832114
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-09 - '
        + 'Paranoid.mp3',
      size: 7854080
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/05 - The Mob Rules.mp3',
      size: 7981292
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/08 - '
        + 'Slipping Away.mp3',
      size: 7984293
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/12 - '
        + 'Paranoid.mp3',
      size: 8114245
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/13 - Iron '
        + 'Man.mp3',
      size: 8329446
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-05 - Evil '
        + 'Woman.mp3',
      size: 8375703
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/06 - Guilty as Hell.mp3',
      size: 8483868
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/03 - Turn to '
        + 'Stone.mp3',
      size: 8503349
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1976 - Technical Ecstasy/06 - Rock 'n' Roll "
        + 'Doctor.mp3',
      size: 8532915
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/10 - The '
        + 'Mob Rules.mp3',
      size: 8584065
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/07 - Sick and Tired.mp3',
      size: 8599847
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-03 - Behind the Wall of '
        + 'Sleep.mp3',
      size: 8859491
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/06 - Digital Bitch.mp3',
      size: 8868822
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/10 - Peace '
        + 'of Mind.mp3',
      size: 8920905
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1970a - '
        + 'Black Sabbath/2-05 - Behind the Wall of Sleep (Studio '
        + 'Outtake).mp3',
      size: 9001163
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/01 - In for the '
        + 'Kill.mp3',
      size: 9014312
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/05 - Born to '
        + 'Lose.mp3',
      size: 9029388
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/01 - Turn Up the '
        + 'Night.mp3',
      size: 9049360
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/2-08 - Solitude (Studio '
        + 'Outtake).mp3',
      size: 9092756
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1975 - Sabotage/06 - '
        + 'Supertzar.mp3',
      size: 9106929
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-04 - '
        + 'Paranoid.mp3',
      size: 9173501
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-08 - Sleeping Village '
        + '(Intro).mp3',
      size: 9189193
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/07 - Slipping Away.mp3',
      size: 9206079
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1976 - Technical Ecstasy/01 - Back Street '
        + 'Kids.mp3',
      size: 9207897
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-06 - Sleeping '
        + 'Village.mp3',
      size: 9218911
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-07 - Evil Woman (Alt. '
        + 'Version).mp3',
      size: 9265465
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/01 - Never Say '
        + 'Die!.mp3',
      size: 9276429
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1995 - Forbidden/09 - '
        + 'Forbidden.mp3',
      size: 9296778
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2013b - 13/12 - Naivete In Black (bonus '
        + 'track).mp3',
      size: 9323197
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/05 - '
        + 'Country Girl.mp3',
      size: 9364602
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/01 - Neon '
        + 'Knights.mp3',
      size: 9404324
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/07 - '
        + 'Cornucopia.mp3',
      size: 9446505
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/02 - The '
        + 'Law Maker.mp3',
      size: 9510509
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/07 - Back to '
        + 'Eden.mp3',
      size: 9532163
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-04 - '
        + 'Cornucopia.mp3',
      size: 9576448
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/03 - '
        + 'Jerusalem.mp3',
      size: 9694397
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1975 - Sabotage/01 - Hole in the Sky.mp3',
      size: 9719263
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1995 - Forbidden/02 - '
        + 'Get a Grip.mp3',
      size: 9724145
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/03 - TV Crimes.mp3',
      size: 9802642
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/08 - Lost '
        + 'Forever.mp3',
      size: 9822465
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/06 - Country Girl.mp3',
      size: 9875854
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1976 - Technical Ecstasy/03 - It's "
        + 'Alright.mp3',
      size: 9894303
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/04 - Shaking off the '
        + 'Chains.mp3',
      size: 9896602
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-02 - Behind the Wall of '
        + 'Sleep.mp3',
      size: 9917674
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/09 - Heaven '
        + 'in Black.mp3',
      size: 9927431
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/07 - Black Moon.mp3',
      size: 9957600
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/05 - Wishing '
        + 'Well.mp3',
      size: 9992601
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-01 - The Mob '
        + 'Rules.mp3',
      size: 10103464
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/06 - Who Are '
        + 'You.mp3',
      size: 10154290
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/03 - '
        + 'Fluff.mp3',
      size: 10178352
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/05 - Immaculate '
        + 'Deception.mp3',
      size: 10235411
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/06 - Time Machine.mp3',
      size: 10328238
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1983 - Born Again/01 - '
        + 'Trashed.mp3',
      size: 10358823
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/09 - Swinging the '
        + 'Chain.mp3',
      size: 10377762
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/04 - Letters from '
        + 'Earth.mp3',
      size: 10386776
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1975 - Sabotage/07 - Am I Going Insane '
        + '(Radio).mp3',
      size: 10401621
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/09 - Cardinal '
        + 'Sin.mp3',
      size: 10492424
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/06 - Danger Zone.mp3',
      size: 10690312
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/07 - Walk Away.mp3',
      size: 10697895
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/03 - Lady Evil.mp3',
      size: 10714614
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-02 - The '
        + 'Wizard.mp3',
      size: 10717277
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/06 - Under the Sun '
        + '(Live).mp3',
      size: 10829385
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/08 - The Hand That Rocks the '
        + 'Cradle.mp3',
      size: 10845672
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-07 - Paranoid.mp3',
      size: 10847601
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/02 - No Stranger to '
        + 'Love.mp3',
      size: 10873201
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1995 - Forbidden/03 - Can't Get Close "
        + 'Enough.mp3',
      size: 10878806
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/1-03 - Planet '
        + 'Caravan.mp3',
      size: 10960057
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/02 - Cross of '
        + 'Thorns.mp3',
      size: 11004436
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-06 - Children of the '
        + 'Grave.mp3',
      size: 11030528
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1981 - Mob Rules/02 - '
        + 'Voodoo.mp3',
      size: 11068059
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-01 - Sabbath Bloody '
        + 'Sabbath.mp3',
      size: 11108853
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1971 - Master of '
        + 'Reality/2-04 - Children of the Grave (Studio Outtake - alt lyrics).mp3',
      size: 11109397
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/02 - Neon '
        + 'Knights.mp3',
      size: 11145130
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-02 - Neon '
        + 'Knights.mp3',
      size: 11166119
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/04 - '
        + 'Zeitgeist.mp3',
      size: 11201909
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/09 - Cloak and Dagger (bonus '
        + 'track).mp3',
      size: 11207748
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/07 - The '
        + 'Wizard.mp3',
      size: 11346610
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/08 - Cross of '
        + 'Thorns.mp3',
      size: 11364342
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/07 - '
        + 'Valhalla.mp3',
      size: 11409068
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/03 - '
        + 'Changes.mp3',
      size: 11449568
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/03 - Devil and '
        + 'Daughter.mp3',
      size: 11486355
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/06 - Die Young.mp3',
      size: 11490973
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-02 - Hole in the '
        + 'Sky.mp3',
      size: 11546624
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/06 - Live '
        + 'Forever.mp3',
      size: 11550911
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-01 - Wicked '
        + 'World.mp3',
      size: 11566254
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/07 - Sins of the '
        + 'Father.mp3',
      size: 11569600
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-05 - '
        + 'Snowblind.mp3',
      size: 11571200
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-04 - The Wizard (Studio '
        + 'Outtake).mp3',
      size: 11618490
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/05 - '
        + 'Supernaut.mp3',
      size: 11647058
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1995 - Forbidden/05 - I Won't Cry for "
        + 'You.mp3',
      size: 11659332
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/04 - Glory '
        + 'Ride.mp3',
      size: 11661478
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/10 - Buried Alive.mp3',
      size: 11708548
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-03 - Symptom of the '
        + 'Universe.mp3',
      size: 11769856
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/1-05 - Electric '
        + 'Funeral.mp3',
      size: 11790755
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1983 - Born Again/08 - '
        + 'Hot Line.mp3',
      size: 11804944
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-05 - Electric Funeral '
        + '(Instrumental).mp3',
      size: 11850856
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/01 - The Illusion of '
        + 'Power.mp3',
      size: 11907045
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/03 - Take Me Home.mp3',
      size: 11942088
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/01 - I Witness.mp3',
      size: 11992886
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2013a - Live... Gathered in Their Masses [Live]/02 '
        + '- Loner.mp3',
      size: 12010347
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1976 - Technical Ecstasy/07 - She's "
        + 'Gone.mp3',
      size: 12055232
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/03 - '
        + 'Loner.mp3',
      size: 12087975
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/03 - Hard Life to '
        + 'Live.mp3',
      size: 12107677
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-05 - Electric '
        + 'Funeral.mp3',
      size: 12111943
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/08 - Rusty Angels.mp3',
      size: 12166080
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-07 - '
        + 'Solitude.mp3',
      size: 12168416
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2007 - '
        + 'Live at Hammersmith Odeon [Live]/14 - Children of the Grave.mp3',
      size: 12184815
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-08 - Behind the Wall of '
        + 'Sleep.mp3',
      size: 12208201
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/03 - I '
        + 'Witness.mp3',
      size: 12211014
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1971 '
        + '- Master of Reality/2-02 - Sweet Leaf (Studio Outtake).mp3',
      size: 12226259
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2013a - Live... Gathered in Their Masses '
        + '[Live]/10 - Sabbath Bloody Sabbath (Intro) - '
        + 'Paranoid.mp3',
      size: 12240296
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-01 - Sweet '
        + 'Leaf.mp3',
      size: 12278134
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/08 - Falling Off the Edge of the '
        + 'World.mp3',
      size: 12311620
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-06 - Sweet '
        + 'Leaf.mp3',
      size: 12331360
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/01 - Time '
        + 'Machine.mp3',
      size: 12341530
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/07 - Looking for '
        + 'Today.mp3',
      size: 12348585
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1976 '
        + '- Technical Ecstasy/05 - All Moving Parts (Stand Still).mp3',
      size: 12400088
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-03 - N.I.B.mp3',
      size: 12468056
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/05 - Kill in the Spirit '
        + 'World.mp3',
      size: 12551092
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/12 - '
        + 'Paranoid.mp3',
      size: 12594186
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1992 - '
        + 'Dehumanizer/09 - I.mp3',
      size: 12628014
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/03 - '
        + 'N.I.B..mp3',
      size: 12684246
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1976 - Technical Ecstasy/04 - Gypsy.mp3',
      size: 12692610
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a '
        + '- Live... Gathered in Their Masses [Live]/04 - Methademic.mp3',
      size: 12696832
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/05 - Shock Wave.mp3',
      size: 12705778
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/06 - Air Dance.mp3',
      size: 12764291
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-04 - Children of the '
        + 'Grave.mp3',
      size: 12784932
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-08 - Psycho '
        + 'Man.mp3',
      size: 12841204
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/06 - Call of the '
        + 'Wild.mp3',
      size: 12859329
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/06 - '
        + 'Nightmare.mp3',
      size: 12864151
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1971 '
        + '- Master of Reality/2-03 - After Forever (Studio Outtake).mp3',
      size: 12873148
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/05 - Seventh Star.mp3',
      size: 12937892
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/07 - Over to '
        + 'You.mp3',
      size: 12994172
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1995 '
        + '- Cross Purposes Live [Live]/02 - Children of the Grave.mp3',
      size: 13008680
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-06 - Lord of This '
        + 'World.mp3',
      size: 13139146
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-05 - Children of the '
        + 'Grave.mp3',
      size: 13142075
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-02 - Sweet '
        + 'Leaf.mp3',
      size: 13144064
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-02 - After '
        + 'Forever.mp3',
      size: 13165259
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/02 - Ancient '
        + 'Warrior.mp3',
      size: 13203767
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-03 - Killing Yourself '
        + 'to Live.mp3',
      size: 13240320
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/08 - Spiral '
        + 'Architect.mp3',
      size: 13273318
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/09 - Over and Over.mp3',
      size: 13295809
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/04 - Isolated Man.mp3',
      size: 13318218
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-07 - N.I.B.mp3',
      size: 13357056
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/06 - '
        + 'Snowblind.mp3',
      size: 13392037
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/11 - Headless '
        + 'Cross.mp3',
      size: 13403006
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/02 - Children of the '
        + 'Sea.mp3',
      size: 13455421
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/11 - '
        + 'Pariah.mp3',
      size: 13472467
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/09 - Keep it Warm.mp3',
      size: 13533221
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1971 - '
        + 'Master of Reality/2-07 - Lord of This World (Studio Outtake).mp3',
      size: 13573299
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-07 - Spiral '
        + 'Architect.mp3',
      size: 13651078
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1973 '
        + '- Sabbath Bloody Sabbath/05 - Killing Yourself to Live.mp3',
      size: 13742493
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/02 - After All (The '
        + 'Dead).mp3',
      size: 13765984
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/13 - '
        + 'Voodoo.mp3',
      size: 13835708
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/08 - Feels '
        + 'Good to Me.mp3',
      size: 13865655
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/01 - Sabbath Bloody '
        + 'Sabbath.mp3',
      size: 13906538
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/04 - Virtual '
        + 'Death.mp3',
      size: 14012689
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/03 - Disturbing the '
        + 'Priest.mp3',
      size: 14065132
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/08 - Lonely Is the '
        + 'Word.mp3',
      size: 14081311
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1972 - Vol. 4/10 - '
        + 'Under the Sun.mp3',
      size: 14172638
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/06 - Dying for '
        + 'Love.mp3',
      size: 14184057
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/05 - Master of '
        + 'Insanity.mp3',
      size: 14321862
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1995 '
        + '- Cross Purposes Live [Live]/09 - Symptom of the Universe.mp3',
      size: 14393028
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1975 - Sabotage/05 - The Thrill of It '
        + 'All.mp3',
      size: 14393111
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1994 - Cross Purposes/10 - Evil Eye.mp3',
      size: 14405555
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/09 - '
        + 'Methademic.mp3',
      size: 14405568
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1970b - Paranoid/1-04 - '
        + 'Iron Man.mp3',
      size: 14418658
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-04 - Iron Man '
        + '(Instrumental).mp3',
      size: 14428596
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/01 - The '
        + 'Shining.mp3',
      size: 14431506
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/04 - Sabbra '
        + 'Cadabra.mp3',
      size: 14470767
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/2-05 - Children '
        + 'of the Grave (Studio Outtake - instrumental).mp3',
      size: 14524084
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1970b - '
        + 'Paranoid/2-03 - Planet Caravan (Alternative Lyrics version).mp3',
      size: 14642852
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/04 - A Hard '
        + 'Road.mp3',
      size: 14673323
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2007 - '
        + 'Live at Hammersmith Odeon [Live]/04 - Children of the Sea.mp3',
      size: 14743772
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-09 - '
        + 'Snowblind.mp3',
      size: 14757611
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-05 - Voodoo.mp3',
      size: 14821150
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-04 - Children of the '
        + 'Sea.mp3',
      size: 14861975
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-04 - N.I.B.mp3',
      size: 14877004
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1995 '
        + '- Cross Purposes Live [Live]/14 - Sabbath Bloody Sabbath.mp3',
      size: 14893102
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Forbidden/10 - Kiss of Death.mp3',
      size: 14908941
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-06 - N.I.B '
        + '(Instrumental).mp3',
      size: 14915222
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2013a - Live... Gathered in Their Masses [Live]/05 - '
        + 'N.I.B..mp3',
      size: 14920389
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1971 - Master of Reality/1-08 - Into The '
        + 'Void.mp3',
      size: 15007414
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1990 - Tyr/01 - Anno '
        + 'Mundi.mp3',
      size: 15011884
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/1-08 - Fairies Wear '
        + 'Boots.mp3',
      size: 15080098
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-03 - Black Sabbath '
        + '(Instrumental).mp3',
      size: 15087554
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1992 - Dehumanizer/01 - Computer God.mp3',
      size: 15117005
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-08 - Fairies Wear Boots '
        + '(Instrumental).mp3',
      size: 15144381
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1973 - Sabbath Bloody Sabbath/02 - A National '
        + 'Acrobat.mp3',
      size: 15145779
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-04 - Fairies Wear '
        + 'Boots.mp3',
      size: 15215294
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-01 - Black '
        + 'Sabbath.mp3',
      size: 15387980
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/1971 - '
        + "Master of Reality/2-09 - Into the Void 'Spanish Sid' (Studio "
        + 'Outtake).mp3',
      size: 15437430
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-02 - Black Sabbath (Studio '
        + 'Outtake).mp3',
      size: 15439691
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-05 - Iron '
        + 'Man.mp3',
      size: 15511552
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-03 - Dirty '
        + 'Women.mp3',
      size: 15611297
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1978 - Never Say Die!/02 - Johnny '
        + 'Blade.mp3',
      size: 15611643
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-06 - Children of the '
        + 'Grave.mp3',
      size: 15656247
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/02 - Headless '
        + 'Cross.mp3',
      size: 15658625
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1975 - Sabotage/03 - Symptom of the '
        + 'Universe.mp3',
      size: 15701336
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-08 - Into the '
        + 'Void.mp3',
      size: 15710566
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1987 - The Eternal Idol/09 - Eternal '
        + 'Idol.mp3',
      size: 15813910
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/07 - Born Again.mp3',
      size: 15853953
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/04 - Into the '
        + 'Void.mp3',
      size: 16004944
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1986 - Seventh Star/07 - Heart Like a '
        + 'Wheel.mp3',
      size: 16010960
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/08 - Nightwing.mp3',
      size: 16032632
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-09 - Faries Wear '
        + 'Boots.mp3',
      size: 16058636
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1978 - Never Say Die!/03 - Junior's "
        + 'Eyes.mp3',
      size: 16192607
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + "Sabbath/1976 - Technical Ecstasy/02 - You Won't Change "
        + 'Me.mp3',
      size: 16202450
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-03 - N.I.B.mp3',
      size: 16241360
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1990 - Tyr/04 - The Sabbath Stones.mp3',
      size: 16427753
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1992 - Dehumanizer/08 - '
        + 'Too Late.mp3',
      size: 16722997
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1989 - Headless Cross/04 - When Death '
        + 'Calls.mp3',
      size: 16724383
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/02 - Cry All '
        + 'Night.mp3',
      size: 16782076
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1980 - Heaven and Hell/04 - Heaven and '
        + 'Hell.mp3',
      size: 16816842
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a - '
        + 'Live... Gathered in Their Masses [Live]/08 - Fairies Wear '
        + 'Boots.mp3',
      size: 16856609
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/2-09 - Warning (Part '
        + '1).mp3',
      size: 16883837
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/05 - Age of '
        + 'Reason.mp3',
      size: 16933183
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/05 - God is Dead '
        + '(Live).mp3',
      size: 16952479
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/08 - Age of Reason '
        + '(Live).mp3',
      size: 16977561
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/09 - Iron '
        + 'Man.mp3',
      size: 17067597
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-02 - Orchid-Lord of This '
        + 'World.mp3',
      size: 17125386
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/1-06 - Hand of Doom.mp3',
      size: 17192870
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1976 - Technical Ecstasy/08 - Dirty '
        + 'Women.mp3',
      size: 17445862
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-03 - The Sign of '
        + 'the Southern Cross - Heaven and Hell '
        + '(Continued).mp3',
      size: 17535701
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-06 - Hand of Doom '
        + '(Instrumental).mp3',
      size: 17577930
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/08 - Dear '
        + 'Father.mp3',
      size: 17693864
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/01 - Season of the '
        + 'Dead.mp3',
      size: 17732924
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-04 - Black '
        + 'Sabbath.mp3',
      size: 18015611
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-08 - Iron '
        + 'Man.mp3',
      size: 18130054
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a '
        + '- Live... Gathered in Their Masses [Live]/06 - Iron Man.mp3',
      size: 18294369
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1983 - Born Again/05 - Zero the Hero.mp3',
      size: 18302161
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-07 - War '
        + 'Pigs.mp3',
      size: 18348032
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/07 - War '
        + 'Pigs.mp3',
      size: 18452087
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1981 - Mob Rules/03 - The Sign of the Southern '
        + 'Cross.mp3',
      size: 18761739
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/07 - '
        + 'Damaged Soul.mp3',
      size: 18957136
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a - '
        + 'Live... Gathered in Their Masses [Live]/03 - Black Sabbath.mp3',
      size: 19141791
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1970b - Paranoid/1-01 - '
        + 'War Pigs.mp3',
      size: 19172943
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1972 - Vol. 4/01 - Wheels of '
        + 'Confusion.mp3',
      size: 19329205
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970b - Paranoid/2-01 - War Pigs '
        + '(Instrumental).mp3',
      size: 19370863
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2013b - 13/01 - End of the Beginning.mp3',
      size: 19525589
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a - '
        + 'Live... Gathered in Their Masses [Live]/07 - End of the '
        + 'Beginning.mp3',
      size: 19644379
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1995 - Cross Purposes Live [Live]/05 - Black '
        + 'Sabbath.mp3',
      size: 19728892
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a '
        + '- Live... Gathered in Their Masses [Live]/01 - War Pigs.mp3',
      size: 19784393
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2016 - The End [EP]/07 - End of the Beginning '
        + '(Live).mp3',
      size: 20031812
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/2-05 - Iron Man.mp3',
      size: 20079274
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-06 - Black '
        + 'Sabbath.mp3',
      size: 20221952
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2007 - Live at Hammersmith Odeon [Live]/06 - Black '
        + 'Sabbath.mp3',
      size: 20228424
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-01 - Hand of '
        + 'Doom.mp3',
      size: 20318293
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1998 - Reunion [Live]/1-01 - War Pigs.mp3',
      size: 20355127
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-06 - Black '
        + 'Sabbath.mp3',
      size: 20863839
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1975 - Sabotage/08 - '
        + 'The Writ.mp3',
      size: 21167169
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/2013b - 13/02 - God '
        + 'Is Dead.mp3',
      size: 21380266
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2013a '
        + '- Live... Gathered in Their Masses [Live]/09 - God Is Dead.mp3',
      size: 21692363
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/1-07 - War '
        + 'Pigs.mp3',
      size: 22500129
    },
    {
      path: 'Black Sabbath Discography (2016) '
        + '@320kbps/Black Sabbath/1975 - Sabotage/04 - '
        + 'Megalomania.mp3',
      size: 23578773
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/2-04 - '
        + 'Megalomania.mp3',
      size: 23822336
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1970a - Black Sabbath/1-07 - Warning.mp3',
      size: 25308406
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/1982 - Live Evil [Live]/2-02 - Heaven and '
        + 'Hell.mp3',
      size: 29064206
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black Sabbath/2007 '
        + '- Live at Hammersmith Odeon [Live]/11 - Heaven and Hell.mp3',
      size: 34622948
    },
    {
      path: 'Black Sabbath Discography (2016) @320kbps/Black '
        + 'Sabbath/2002 - Past Lives [Live]/1-08 - Wicked '
        + 'World.mp3',
      size: 45486080
    }
  ],
  dates: [
    {peers: 136, date: '2019-03-03', seeds: 96, leeches: 40},
    {peers: 126, date: '2019-03-04', seeds: 88, leeches: 38},
    {peers: 119, date: '2019-03-05', seeds: 85, leeches: 34},
    {peers: 125, date: '2019-03-06', seeds: 87, leeches: 38},
    {peers: 130, date: '2019-03-07', seeds: 96, leeches: 34},
    {peers: 118, date: '2019-03-08', seeds: 84, leeches: 34},
    {peers: 145, date: '2019-03-09', seeds: 105, leeches: 40},
    {peers: 139, date: '2019-03-10', seeds: 90, leeches: 49},
    {peers: 113, date: '2019-03-11', seeds: 77, leeches: 36},
    {peers: 122, date: '2019-03-12', seeds: 83, leeches: 39},
    {peers: 118, date: '2019-03-13', seeds: 87, leeches: 31},
    {peers: 101, date: '2019-03-14', seeds: 73, leeches: 28},
    {peers: 116, date: '2019-03-15', seeds: 85, leeches: 31}
  ]
}

test('getTorrentByName', async () => {
  const db = Db({dbPath}) as any
  await db.init()
  db.getTorrentByName = getTorrentByName
  Object.freeze(db)
  const name = 'Black Sabbath Discography (2016) @320kbps'
  const torrent = await db.getTorrentByName(name)
  expect(torrent).toEqual(expectedRes)
})
