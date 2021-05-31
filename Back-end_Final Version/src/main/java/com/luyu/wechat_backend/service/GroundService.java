package com.luyu.wechat_backend.service;

import com.luyu.wechat_backend.entity.ground;

import java.text.ParseException;
import java.util.List;

public interface GroundService {

    List<ground> getGroundList(String name,String todayTime);

    boolean addGround(ground ground);

    List<ground> getMyOrder(String phone) throws ParseException;

    String changeStatus(String uuid);

    void update(ground ground);
}
