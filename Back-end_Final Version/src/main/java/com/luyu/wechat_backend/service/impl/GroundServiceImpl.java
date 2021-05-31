package com.luyu.wechat_backend.service.impl;

import com.luyu.wechat_backend.dao.GroundDao;
import com.luyu.wechat_backend.entity.ground;
import com.luyu.wechat_backend.service.GroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service
public class GroundServiceImpl implements GroundService {

    @Autowired
    private GroundDao groundDao;

    @Override
    public List<ground> getGroundList(String name, String todayTime) {
        return groundDao.showGround(name, todayTime);
    }

    @Transactional
    @Override
    public boolean addGround(ground ground) {
        ground.setCreateTime(new Date());
        long uuid = Snowflake.roll_ID();
        String set = String.valueOf(uuid);
        ground.setUuid(set);
        boolean finish = groundDao.insertGround(ground);
        return finish;
    }

    @Override
    public List<ground> getMyOrder(String phone) throws ParseException {
        List<ground> order = groundDao.queryOrder(phone);
        String day;
        String time;
        for (int i = 0; i < order.size(); i++) {
            day = order.get(i).getTodayTime();
            time = order.get(i).getOrderSlot();
            day = day.replaceAll("/", "-");
            String[] x = time.split("-");
            String start = day + " " + x[0] + ":00:00";
            String end = day + " " + x[1] + ":00:00";
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date_start = formatter.parse(start);
            Date date_end = formatter.parse(end);
            Date currentTime = new Date();
            int compareTo = date_end.compareTo(currentTime);//左边日期更小是-1
            if (compareTo < 0) {
                //已完成0 未完成1
                if (order.get(i).getStatus() == null) {
                    order.get(i).setStatus(0);
                    update(order.get(i));
                }
                if (order.get(i).getStatus() == 1) {
                    order.get(i).setStatus(0);
                    update(order.get(i));
                }
            } else {
                if (order.get(i).getStatus() == null) {
                    order.get(i).setStatus(1);
                    update(order.get(i));
                }
            }
        }
        return order;
    }


    @Override
    public String changeStatus(String uuid) {
        List<ground> order = groundDao.changeOrder(uuid);
        order.get(0).setStatus(2);
        System.out.println(order.get(0).getUuid());
        update(order.get(0));
        String orderId = order.get(0).getOrderId();
        return orderId;
    }

    @Override
    public void update(ground ground) {
        groundDao.updateStatus(ground);
    }
}
