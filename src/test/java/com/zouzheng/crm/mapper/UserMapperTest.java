package com.zouzheng.crm.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserMapperTest {
  @Autowired
    private UserMapper mapper;
    private int i;
    private String a;
  @Test
  void test(){

    mapper.selectList(null).forEach(System.out::println);

  }
}