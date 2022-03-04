import Heap from '../数据结构TS/12-BinaryHeap';
function minMeetingRooms(intervals: number[][]) {
  if (!intervals.length) return 0;
  intervals.sort((item1, item2) => item1[0] - item2[0]);
  //创建一个最小堆  存放每一个会议的结束时间
  const heap = new Heap((a: number, b: number) => b - a);
  //添加0号会议的结束时间
  heap.add(intervals[0][1]);
  for (let i = 1; i < intervals.length; i++) {
    //i号会议的开始事件>=堆顶(目前占用的会议室中最早结束的事件)
    if (intervals[i][0] >= heap.get()) {
      //删除堆顶并将i号会议的结束时间加入堆中
      heap.remove();
    }
    heap.add(intervals[i][1]);
  }
}
function minMeetingRooms2(intervals: number[][]) {
  if (!intervals.length) return 0;
  //存放所有会议的开始时间
  const begins = new Array(intervals.length);
  //所有会议的结束时间
  const ends = new Array(intervals.length);
  for (let i = 0; i < intervals.length; i++) {
    begins[i] = intervals[i][0];
    ends[i] = intervals[i][1];
  }
  begins.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let room = 0,
    endIndex = 0;
  for (const begin of begins) {
    if (begin >= ends[endIndex]) {
      //能重复利用会议室
      endIndex++;
    } else {
      //需要新开一个会议室
      room++;
    }
  }
  return room;
}
