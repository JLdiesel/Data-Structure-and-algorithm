function canAttendMeetings(intervals: number[][]) {
  if (!intervals.length) return true;
  //按照会议开始事件从小到大排序
  intervals.sort((item1, item2) => item1[0] - item2[0]);
  for (let i = 1; i < intervals.length; i++) {
    //如果一个会议的开始事件小于前一个会议的结束事件
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  return true;
}
