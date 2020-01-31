import server from '../index'
import fetch from 'node-fetch'
import {SERVER} from 'lib/settings'
import {dbPath} from 'lib/Db/fixtures'
import Db from 'lib/Db'

const expectedTorrentNameResult = {
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

const expectMostPeersTorrentResult = [
  {
    name: 'Aquaman.2018.1080p.WEBRip.x264-MP4',
    size: 2480343613,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: [
      {
        path: 'Aquaman (2018) [WEBRip] [1080p] '
          + '[YTS.AM]/Aquaman.2018.1080p.WEBRip.x264-[YTS.AM].mp4',
        size: 2475328876
      },
      {
        path: 'Aquaman (2018) [WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {
        peers: 36570,
        date: '2019-03-06',
        seeds: 17908,
        leeches: 18662
      },
      {
        peers: 32155,
        date: '2019-03-07',
        seeds: 19328,
        leeches: 12827
      },
      {peers: 28996, date: '2019-03-09', seeds: 19318, leeches: 9678},
      {peers: 28300, date: '2019-03-08', seeds: 18608, leeches: 9692}
    ]
  },
  {
    name: 'Aquaman.2018.720p.WEBRip.x264',
    size: 1288490189,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-04',
    files: [
      {
        path: 'Aquaman (2018) [WEBRip] [720p] '
          + '[YTS.AM]/Aquaman.2018.720p.WEBRip.x264-[YTS.AM].mp4',
        size: 1293657543
      },
      {
        path: 'Aquaman (2018) [WEBRip] [720p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {
        peers: 24937,
        date: '2019-03-06',
        seeds: 12263,
        leeches: 12674
      },
      {peers: 21376, date: '2019-03-07', seeds: 12235, leeches: 9141},
      {peers: 18837, date: '2019-03-08', seeds: 11811, leeches: 7026},
      {peers: 18457, date: '2019-03-09', seeds: 11623, leeches: 6834}
    ]
  },
  {
    name: 'Spider-Man Into the Spider-Verse (2018) [WEBRip] [1080p] English',
    size: 2007897211,
    categories: 'Video:HD - Movies',
    createdAt: '2019-02-20',
    files: [
      {
        path: 'Spider-Man Into The Spider-Verse (2018) [WEBRip] [1080p] '
          + '[YTS.AM]/Spider-Man.Into.The.Spider-Verse.2018.1080p.WEBRip.x264-[YTS.AM].mp4',
        size: 2007245013
      },
      {
        path: 'Spider-Man Into The Spider-Verse (2018) '
          + '[WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      }
    ],
    dates: [
      {peers: 15561, date: '2019-03-05', seeds: 13034, leeches: 2527},
      {peers: 15338, date: '2019-03-06', seeds: 12937, leeches: 2401},
      {peers: 14630, date: '2019-03-07', seeds: 12486, leeches: 2144},
      {peers: 13619, date: '2019-03-08', seeds: 11756, leeches: 1863},
      {peers: 13424, date: '2019-03-09', seeds: 11596, leeches: 1828}
    ]
  },
  {
    name: 'Aquaman 2018 1080p WEB h264-STRiFE[rarbg]',
    size: 6152540652,
    categories: 'Movies',
    createdAt: '2019-03-05',
    files: [
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG.txt',
        size: 30
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/RARBG_DO_NOT_MIRROR.exe',
        size: 99
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.mkv',
        size: 6147564519
      },
      {
        path: 'Aquaman.2018.1080p.WEB.h264-STRiFE[rarbg]/aquaman.2018.1080p.web.h264-strife.nfo',
        size: 51
      }
    ],
    dates: [
      {peers: 11723, date: '2019-03-06', seeds: 7504, leeches: 4219},
      {peers: 7870, date: '2019-03-07', seeds: 5904, leeches: 1966},
      {peers: 6100, date: '2019-03-08', seeds: 4832, leeches: 1268},
      {peers: 6046, date: '2019-03-09', seeds: 4712, leeches: 1334}
    ]
  }
]

const expectedSevenDayMostPeerResult = [
  {
    name: 'Triple.Frontier.2019.720p.WEBRip.x264-MP4',
    size: 1138166333,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-12',
    files: null,
    dates: [
      {peers: 11434, date: '2019-03-14', seeds: 5904, leeches: 5530},
      {peers: 10847, date: '2019-03-15', seeds: 6734, leeches: 4113},
      {peers: 3794, date: '2019-03-16', seeds: 2875, leeches: 919}
    ]
  },
  {
    name: 'The Lego Movie 2 The Second Part (2019) [WEBRip] (1080p) [YTS AM]',
    size: 1803886264,
    categories: 'Movies',
    createdAt: '2019-03-11',
    files: [
      {
        path: 'The Lego Movie 2 The Second Part (2019) '
          + '[WEBRip] [1080p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      },
      {
        path: 'The Lego Movie 2 The Second Part (2019) [WEBRip] [1080p] '
          + '[YTS.AM]/The.Lego.Movie.2.The.Second.Part.2019.1080p.WEBRip.x264-[YTS.AM].mp4',
        size: 1809049895
      }
    ],
    dates: [
      {peers: 9173, date: '2019-03-12', seeds: 5893, leeches: 3280},
      {peers: 6462, date: '2019-03-14', seeds: 5055, leeches: 1407},
      {peers: 6296, date: '2019-03-16', seeds: 4860, leeches: 1436},
      {peers: 6276, date: '2019-03-13', seeds: 5007, leeches: 1269},
      {peers: 5862, date: '2019-03-15', seeds: 4667, leeches: 1195}
    ]
  },
  {
    name: 'Triple.Frontier.2019.1080p.WEBRip.x264-MP4',
    size: 2168958484,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-12',
    files: null,
    dates: [
      {peers: 8806, date: '2019-03-14', seeds: 4152, leeches: 4654},
      {peers: 8215, date: '2019-03-15', seeds: 4744, leeches: 3471},
      {peers: 2366, date: '2019-03-16', seeds: 1799, leeches: 567}
    ]
  },
  {
    name: 'Triple Frontier 2019 1080p NF WEB-DL DDP5 1 x264-NTG',
    size: 4574140170,
    categories: 'Movies',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7988, date: '2019-03-14', seeds: 5365, leeches: 2623},
      {peers: 5428, date: '2019-03-15', seeds: 4224, leeches: 1204},
      {peers: 4490, date: '2019-03-16', seeds: 3597, leeches: 893}
    ]
  },
  {
    name: 'LUXONIX Purity v1.2.5-d33p57a7u5',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7969, date: '2019-03-15', seeds: 7643, leeches: 326},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Movavi Video Suite 15.4 + Crack + Portable - Crackingpatching',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7966, date: '2019-03-15', seeds: 7648, leeches: 318},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Media Encoder CC 2018 v12.1.2.69 (x64) + Patch',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7965, date: '2019-03-15', seeds: 7639, leeches: 326},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Red Giant Complete Suite Feb 2018 For Windows - [CrackzSoft]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7955, date: '2019-03-15', seeds: 7582, leeches: 373},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'ADOBE PHOTOSHOP CS5.1 EXTENDED EDITION [thethingy]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7949, date: '2019-03-15', seeds: 7631, leeches: 318},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'WinRAR 5.70 Final (x86-x64) + Medicine[BabuPC]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7949, date: '2019-03-15', seeds: 7610, leeches: 339},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'uTorrent Pro 3.5.5 build 44994 Full',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7948, date: '2019-03-15', seeds: 7631, leeches: 317},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'IBM SPSS Statistics SPSS 24 + Serial -- Win_x64',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7947, date: '2019-03-15', seeds: 7620, leeches: 327},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Master Collection CS6 WORKING [ENG]- P2P',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7944, date: '2019-03-15', seeds: 7630, leeches: 314},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'AUTODESK.INVENTOR.PRO.V2017.WIN64-ISO',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7938, date: '2019-03-15', seeds: 7621, leeches: 317},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: '[PC] Guitar Pro 6.0.9 + Newest Soundtracks',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7928, date: '2019-03-15', seeds: 7617, leeches: 311},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Windows 10 Pro X32 & X64 product key and windows usb instal',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7925, date: '2019-03-15', seeds: 7632, leeches: 293},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Project 2016 x64 Pro VL Multi-17 Apr 2016 {Gen2}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7921, date: '2019-03-15', seeds: 7599, leeches: 322},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Driver Genius Pro 16.0.0.249 FINAL + Crack [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7917, date: '2019-03-15', seeds: 7587, leeches: 330},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Autodesk AutoCAD 2016 SP1 (x64+X86) Incl.Keygen - {Ranger.03}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7908, date: '2019-03-15', seeds: 7586, leeches: 322},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop Portable CS6 13.1 (x32-x64) Multi',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7906, date: '2019-03-15', seeds: 7586, leeches: 320},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'iSeePassword Windows Password Recovery Pro v2.6.2.2 + Serial',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7906, date: '2019-03-15', seeds: 7557, leeches: 349},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'MICROSOFT OFFICE 2010 EXCEL X64 [thethingy]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7906, date: '2019-03-15', seeds: 7584, leeches: 322},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop CC 2014 (64 bit) (Crack) [ChingLiu]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7905, date: '2019-03-15', seeds: 7555, leeches: 350},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Office Pro Plus 2019 16.0.10325.20118',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7902, date: '2019-03-15', seeds: 7615, leeches: 287},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Microsoft.Office.2019.Professional.Plus.ACTiVATiON-iND',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7902, date: '2019-03-15', seeds: 7549, leeches: 353},
      {peers: 3, date: '2019-03-16', seeds: 3, leeches: 0}
    ]
  },
  {
    name: 'SolidWorks 2019 SP1 x64 --- With SN and activator',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7901, date: '2019-03-15', seeds: 7535, leeches: 366},
      {peers: 3, date: '2019-03-16', seeds: 3, leeches: 0}
    ]
  },
  {
    name: 'Wondershare Filmora 8.7.4.0 + Crack [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7901, date: '2019-03-15', seeds: 7608, leeches: 293},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'AVG Anti-Virus Internet Security 2016 + Key',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7901, date: '2019-03-15', seeds: 7564, leeches: 337},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Ableton live Suite v9.5 WiN x86 x64-d33p57a7u5',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7899, date: '2019-03-15', seeds: 7569, leeches: 330},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Toolkit 2.6.4 Official Torrent',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7899, date: '2019-03-15', seeds: 7559, leeches: 340},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Acrobat Reader DC 2018.11.20058 Pre-Cracked [CracksMind]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7897, date: '2019-03-15', seeds: 7561, leeches: 336},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Office.2016.Permanent.Activator.Ultimate.1.2',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7896, date: '2019-03-15', seeds: 7574, leeches: 322},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'WinZip 15 Pro (with Working Key)',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7894, date: '2019-03-15', seeds: 7572, leeches: 322},
      {peers: 3, date: '2019-03-16', seeds: 3, leeches: 0}
    ]
  },
  {
    name: 'Adobe Illustrator CC 2019 v23.0.1 PreCracked',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7894, date: '2019-03-15', seeds: 7568, leeches: 326},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'Vray for Sketchup 2014 + Patch',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7894, date: '2019-03-15', seeds: 7617, leeches: 277},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'TechSmith Camtasia Studio 9.0.4 Build 1948 + Serials [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7893, date: '2019-03-15', seeds: 7520, leeches: 373},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop CC 2017 18.0 x64',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7890, date: '2019-03-15', seeds: 7569, leeches: 321},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'CCleaner Professional Plus v5.25.0.5902 x86-x64 Setup + CRACK',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7888, date: '2019-03-15', seeds: 7550, leeches: 338},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'IDM 6.30 Build 9 incl Patch [32bit + 64bit] [Crackingpatching]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7887, date: '2019-03-15', seeds: 7559, leeches: 328},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'VLC Media Player 3.0.0 20171128 (x86-x64) + {Latest}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7883, date: '2019-03-15', seeds: 7561, leeches: 322},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Office 2013 RTM Pt-Br (x64) - MSDN',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7883, date: '2019-03-15', seeds: 7566, leeches: 317},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Lumion 8.0 Pro + Serial Number Reading Tool - [CrackzSoft]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7882, date: '2019-03-15', seeds: 7547, leeches: 335},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'KMSAuto Lite Portable 1.5.0 By Ratiborus[BabuPC]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7882, date: '2019-03-15', seeds: 7558, leeches: 324},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'AOMEI Partition Assistant v6.0 FINAL + Serials [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7880, date: '2019-03-15', seeds: 7567, leeches: 313},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Pro Tools 10.3.4 HD Win + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7880, date: '2019-03-15', seeds: 7541, leeches: 339},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Office Professional Plus + Activation',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7879, date: '2019-03-15', seeds: 7554, leeches: 325},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'The Lego Movie 2 The Second Part (2019) [WEBRip] [720p] English',
    size: 940824330,
    categories: 'Video:HD - Movies',
    createdAt: '2019-03-10',
    files: [
      {
        path: 'The Lego Movie 2 The Second Part (2019) '
          + '[WEBRip] [720p] [YTS.AM]/www.YTS.AM.jpg',
        size: 58132
      },
      {
        path: 'The Lego Movie 2 The Second Part (2019) [WEBRip] [720p] '
          + '[YTS.AM]/The.Lego.Movie.2.The.Second.Part.2019.720p.WEBRip.x264-[YTS.AM].mp4',
        size: 940762620
      }
    ],
    dates: [
      {peers: 7879, date: '2019-03-12', seeds: 5125, leeches: 2754},
      {peers: 5735, date: '2019-03-14', seeds: 4428, leeches: 1307},
      {peers: 5379, date: '2019-03-16', seeds: 4157, leeches: 1222},
      {peers: 5188, date: '2019-03-15', seeds: 4168, leeches: 1020},
      {peers: 4873, date: '2019-03-13', seeds: 3435, leeches: 1438}
    ]
  },
  {
    name: 'GIMP v2.8.22 - SeuPirate',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7878, date: '2019-03-15', seeds: 7541, leeches: 337},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Premiere Pro CS6 6.0.0 LS7 Multilanguage [ChingLiu]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7876, date: '2019-03-15', seeds: 7523, leeches: 353},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Red Giant Magic Bullet Suite 13.0.4 + Serials - [SH]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7873, date: '2019-03-15', seeds: 7565, leeches: 308},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop CS6 13.0.1 Final Multilanguage (cracked dll)',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7872, date: '2019-03-15', seeds: 7548, leeches: 324},
      {peers: 2, date: '2019-03-16', seeds: 1, leeches: 1}
    ]
  },
  {
    name: 'Ccleaner Professional v5.12.5431 FINAL + Serials [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7871, date: '2019-03-15', seeds: 7559, leeches: 312},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'GetData Recover My Files 5.2.1.1964 Professional Edition.zip',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7870, date: '2019-03-15', seeds: 7566, leeches: 304},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Microsoft SQL Server 2014 Enterprise Edition with SP1 x64-[First',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7868, date: '2019-03-15', seeds: 7538, leeches: 330},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'BlueStacks 4 (v4.50.0.1043) + Premium + Root {B4tman}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7867, date: '2019-03-15', seeds: 7520, leeches: 347},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Nero Burning ROM 2014 v15.0.05300 ML Incl. Crack + Key',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7867, date: '2019-03-15', seeds: 7519, leeches: 348},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Xilisoft HD Video Converter 7.8.19 FULL + Serials [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7867, date: '2019-03-15', seeds: 7516, leeches: 351},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Acrobat Pro DC 2019.010.20098 Multilingual + Medicine[Babu',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7866, date: '2019-03-15', seeds: 7517, leeches: 349},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'DRIVER PACK 17.7.24 (2017)',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7866, date: '2019-03-15', seeds: 7543, leeches: 323},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Visual Studio 2015.1 Enterprise 14.0.24720 (x86x64)',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7866, date: '2019-03-15', seeds: 7548, leeches: 318},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Bandicam 4.2.0.1439 + Keygen [CracksMind]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7866, date: '2019-03-15', seeds: 7516, leeches: 350},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop CC 2015 FULL Portable [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7866, date: '2019-03-15', seeds: 7538, leeches: 328},
      {peers: 2, date: '2019-03-16', seeds: 1, leeches: 1}
    ]
  },
  {
    name: 'EaseUS Data Recovery Wizard 11.9.0 + Keygen - [CrackzSoft]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7865, date: '2019-03-15', seeds: 7520, leeches: 345},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Foxit Phantom PDF Business 9.0.0.29935 + Crack - 2017 - ArmaanP',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7865, date: '2019-03-15', seeds: 7526, leeches: 339},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'DriverPack Solution 17.7.101-18074 Full Final - DailyApp',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7862, date: '2019-03-15', seeds: 7575, leeches: 287},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Hide My IP 6.0.370 Multilingual Premium VPN + Key - AppzDam',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7860, date: '2019-03-15', seeds: 7563, leeches: 297},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Corel Draw Graphics Suite X8',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7860, date: '2019-03-15', seeds: 7500, leeches: 360},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Autodesk AutoCAD 2010 Multilang-32+64bit-Retail',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7859, date: '2019-03-15', seeds: 7547, leeches: 312},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'MICROSOFT OFFICE 2010 EXCEL X86 [thethingy]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7859, date: '2019-03-15', seeds: 7523, leeches: 336},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Premiere Pro CC 2015 v9.0 + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7859, date: '2019-03-15', seeds: 7567, leeches: 292},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'IDM 6.30 Build 7 incl Patch [32bit+64bit] Crackingpatching',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7858, date: '2019-03-15', seeds: 7528, leeches: 330},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'microsoft Office Enterprise 2007 + Key - THADOGG',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7858, date: '2019-03-15', seeds: 7558, leeches: 300},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Ashampoo Burning Studio 2015 v1.15.0.16 Final + Serial [ATOM]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7855, date: '2019-03-15', seeds: 7522, leeches: 333},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'DriverPack Solution 17.7.129-18120 Latest - DailyAppp',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7855, date: '2019-03-15', seeds: 7565, leeches: 290},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'ABBYY FineReader v11.0.102.583 OCR CE + Crack [CC RG]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7854, date: '2019-03-15', seeds: 7556, leeches: 298},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Photoshop CC 2015 (20150529.r.88) (32+64Bit) + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7853, date: '2019-03-15', seeds: 7524, leeches: 329},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'IBM SPSS Statistics 20 - x86',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7851, date: '2019-03-15', seeds: 7534, leeches: 317},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'BsPlayer Pro 2.64 key+keygen[CORE] by Senzati',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7851, date: '2019-03-15', seeds: 7508, leeches: 343},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Sony Vegas Pro 14.0 Build 244 + patch - Crackingpatching',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7851, date: '2019-03-15', seeds: 7559, leeches: 292},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'Nero 2018 Platinum 19.0.07300 Full + Pre-Cracked - [CrackzSoft]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7850, date: '2019-03-15', seeds: 7513, leeches: 337},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Adobe Creative Cloud 2018 Collection March 2018 + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7850, date: '2019-03-15', seeds: 7528, leeches: 322},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Animate Cc 2018 v18.0.2 + Crack [CracksMind]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7850, date: '2019-03-15', seeds: 7529, leeches: 321},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Avast! Pro Antivirus,Internet Security & Premier 2017 + Keys',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7850, date: '2019-03-15', seeds: 7544, leeches: 306},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Adobe Acrobat XI Pro 11.0.20 FINAL + Crack [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7850, date: '2019-03-15', seeds: 7519, leeches: 331},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Office 2016 Pro Plus VL x64 MULTi-22 FEB 2019 {Gen2}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7849, date: '2019-03-15', seeds: 7550, leeches: 299},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'CyberLink PowerDirector Ultimate 17.0.2126.0 Pre-Cracked',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7849, date: '2019-03-15', seeds: 7523, leeches: 326},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'Blackmagic Design DaVinci Resolve Studio 15.0.0.086 + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7848, date: '2019-03-15', seeds: 7514, leeches: 334},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'AUTODATA 3.45 + Crack FULL [TechTools]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7847, date: '2019-03-15', seeds: 7514, leeches: 333},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'FL Studio Producer Edition 20.1.1 Build 795 + Medicine[BabuPC]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7847, date: '2019-03-15', seeds: 7524, leeches: 323},
      {peers: 5, date: '2019-03-16', seeds: 5, leeches: 0}
    ]
  },
  {
    name: 'IDM 6.32 Build 5 incl Patch [32bit + 64bit] [CrackingPatching]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7511, leeches: 335},
      {peers: 1, date: '2019-03-16', seeds: 0, leeches: 1}
    ]
  },
  {
    name: 'Adobe Premiere Pro CC 2018 v12.0.0.224 incl + Patch',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7550, leeches: 296},
      {peers: 2, date: '2019-03-16', seeds: 2, leeches: 0}
    ]
  },
  {
    name: 'EaseUS Data Recovery Wizard Professional 7.5+Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7545, leeches: 301},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Smadav Pro 2017 v11.3.5 Final + Serial - [SH]',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7543, leeches: 303},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Sony Vegas Pro 13.0 Build 453 (x64) + Patch DI',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7517, leeches: 329},
      {peers: 1, date: '2019-03-16', seeds: 1, leeches: 0}
    ]
  },
  {
    name: 'Microsoft Office Professional Plus (x64) 2013 Incl Activator -',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7846, date: '2019-03-15', seeds: 7529, leeches: 317},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'AVS Video Editor 7.1.4.264 + Crack {B4tman}',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7843, date: '2019-03-15', seeds: 7524, leeches: 319},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Internet Download Manager IDM 6.28 build 10 32bit + 64bit Patch',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7842, date: '2019-03-15', seeds: 7526, leeches: 316},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Kaspersky Internet Security 2019 v19.0.0.1088 + Crack',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7842, date: '2019-03-15', seeds: 7525, leeches: 317},
      {peers: 1, date: '2019-03-16', seeds: 0, leeches: 1}
    ]
  },
  {
    name: 'Microsoft Office Professional Plus 2013 x86 PT-BR + Ativador',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7841, date: '2019-03-15', seeds: 7518, leeches: 323},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  },
  {
    name: 'Image-Line Fruity Loops Studio Edition 10.0.0 @vAin4us',
    size: 8420065,
    categories: 'Applications:Windows',
    createdAt: '2019-03-13',
    files: null,
    dates: [
      {peers: 7841, date: '2019-03-15', seeds: 7486, leeches: 355},
      {peers: 0, date: '2019-03-16', seeds: 0, leeches: 0}
    ]
  }
]

beforeAll(async () => {
  // TODO mock date to '2019-03-18'
  server.cache = false
  server.db = Db({dbPath})
  await server.launch()
})

test('/hello', async () => {
  const res = await fetch(SERVER.URL).then(res => res.text())
  expect(res).toBe('hello')
})

test('/torrent/:torrentName', async () => {
  const name = 'Black Sabbath Discography (2016) @320kbps'
  const torrent = await fetch(`${SERVER.URL}/torrent/${name}`).then(res => res.json())
  expect(torrent).toEqual(expectedTorrentNameResult)
})

test('/torrents', async () => {
  let DateNowMock = Date.now
  Date.now = () => new Date('2019-03-18').getTime()
  const res = await fetch(`${SERVER.URL}/torrents`).then(res => res.json())
  Date.now = DateNowMock
  expect(res).toEqual(expectedSevenDayMostPeerResult)
})

test('/torrents?startDate=2019-03-05&endDate=2019-03-18', async () => {
  const res = await fetch(`${SERVER.URL}/torrents?startDate=2019-03-05&endDate=2019-03-18&limit=4`).then(res => res.json())
  expect(res).toEqual(expectMostPeersTorrentResult)
})

afterAll(async () => {
  // unmock date
  await server.destroy()
})
