package com.luyu.wechat_backend.service.impl;

public class Snowflake {

    private static long computer_id;
    private static long room_id;
    private static long one_second;
    private static long time_first = 1585644268888L;
    private static long work_id_bit = 5L;
    private static long room_id_bit = 5L;
    private static long one_second_bit = 12L;
    private static long max_computer_num = -1L ^ (-1L << work_id_bit);
    private static long max_room_num = -1L ^ (-1L << room_id_bit);//11111111————11100000————00000111
    private static long one_second_max = -1L ^ (-1L << one_second_bit);

    private static long work_id_shift = one_second_bit;
    private static long room_id_Shift = one_second_bit + work_id_bit;
    private static long time_shift = one_second_bit + work_id_bit + room_id_bit;
    private static long last_time_flag = -1L ^ (-1L << one_second_bit);//判断是否在1s内出号

    private Snowflake(){}
        public static synchronized long roll_ID() {
            long current_mills = get_time();
            if (current_mills < last_time_flag) {
                throw new RuntimeException("time error");
            }
            if (current_mills == last_time_flag) {
                one_second = (one_second + 1) & one_second_max;//防止超限
                if (one_second == 0L){
                    current_mills = get_time();
                }
            }else{
                one_second = 0;//超限
            }
            last_time_flag = current_mills;


            return (current_mills - time_first) << time_shift|
                    room_id << room_id_Shift|
                    computer_id << work_id_shift|
                    one_second;
        }

        private static long getNextMill(){
            long mill = get_time();
            while (mill <= get_time()) {
                mill = get_time();
            }
            return mill;
        }
        public static long get_time(){
            return System.currentTimeMillis();
        }

}
