package com.luyu.wechat_backend.dao;

import com.luyu.wechat_backend.entity.ground;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface GroundDao {

    List<ground> showGround(@Param("name") String name,
                             @Param("todayTime") String todayTime);

    boolean insertGround(ground ground);

    List<ground> queryOrder(String phone);

    List<ground> changeOrder(String uuid);

    void updateStatus(ground ground);


}
