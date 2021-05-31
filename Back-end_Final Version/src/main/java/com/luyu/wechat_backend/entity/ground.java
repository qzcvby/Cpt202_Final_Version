package com.luyu.wechat_backend.entity;

import java.util.Date;

public class ground implements Comparable<ground>{
    private String name;
    private Integer num;
    private String todayTime;
    private Date createTime;
    private String orderSlot;
    private String phone;
    private String uuid;
    private Integer status;
    private String orderId;
    private float price;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTodayTime() {
        return todayTime;
    }

    public void setTodayTime(String todayTime) {
        this.todayTime = todayTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getOrderSlot() {
        return orderSlot;
    }

    public void setOrderSlot(String orderSlot) {
        this.orderSlot = orderSlot;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Override
    public int compareTo(ground o) {
        int flag =  this.createTime.compareTo(o.createTime);
        if (flag == 1){
            return -1;
        }else if (flag == -1){
            return 1;
        }else {
            return 0;
        }
    }
}
