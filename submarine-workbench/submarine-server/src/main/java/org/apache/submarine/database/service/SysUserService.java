/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */
package org.apache.submarine.database.service;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.apache.submarine.database.MyBatisUtil;
import org.apache.submarine.database.entity.SysUser;
import org.apache.submarine.database.mappers.SysUserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SysUserService {
  private static final Logger LOG = LoggerFactory.getLogger(SysUserService.class);

  private static String GET_USER_BY_NAME_STATEMENT
      = "org.apache.submarine.database.mappers.SysUserMapper.getUserByName";

  public SysUser getUserByName(String name, String password) throws Exception {
    SysUser sysUser = null;
    SqlSession sqlSession = MyBatisUtil.getSqlSession();
    try {
      HashMap<String, Object> mapParams = new HashMap<>();
      mapParams.put("name", name);
      mapParams.put("password", password);

      Map<String, Object> params = new HashMap<>();
      params.put("mapParams", mapParams);

      sysUser = sqlSession.selectOne(GET_USER_BY_NAME_STATEMENT, params);
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }

    return sysUser;
  }

  public SysUser login(HashMap<String, String> mapParams) throws Exception {
    SqlSession sqlSession = null;
    SysUser sysUser = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper sysUserMapper = sqlSession.getMapper(SysUserMapper.class);
      sysUser = sysUserMapper.login(mapParams);
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }
    return sysUser;
  }

  public List<SysUser> queryPageList(String userName,
                                String email,
                                String deptCode,
                                String column,
                                String field,
                                int pageNo,
                                int pageSize) throws Exception {
    LOG.info("queryDictList userName:{}, email:{}, deptCode:{}, " +
            "column:{}, field:{}, pageNo:{}, pageSize:{}",
        userName, email, deptCode, column, field, pageNo, pageSize);

    List<SysUser> list = null;
    SqlSession sqlSession = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper sysUserMapper = sqlSession.getMapper(SysUserMapper.class);
      Map<String, Object> where = new HashMap<>();
      where.put("userName", userName);
      where.put("email", email);
      where.put("deptCode", deptCode);
      list = sysUserMapper.selectAll(where, new RowBounds(pageNo, pageSize));
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }

    return list;
  }

  public boolean add(SysUser sysUser) throws Exception {
    LOG.info("add({})", sysUser.toString());

    SqlSession sqlSession = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper userMapper = sqlSession.getMapper(SysUserMapper.class);
      userMapper.add(sysUser);
      sqlSession.commit();
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }
    return true;
  }

  public boolean edit(SysUser sysUser) throws Exception {
    LOG.info("edit({})", sysUser.toString());
    SqlSession sqlSession = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper userMapper = sqlSession.getMapper(SysUserMapper.class);
      userMapper.updateBy(sysUser);
      sqlSession.commit();
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }
    return true;
  }

  public boolean delete(String id) throws Exception {
    LOG.info("delete({})", id.toString());
    SqlSession sqlSession = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper userMapper = sqlSession.getMapper(SysUserMapper.class);
      userMapper.deleteById(id);
      sqlSession.commit();
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }
    return true;
  }

  public boolean changePassword(SysUser user) throws Exception {
    LOG.info("changePassword({})", user.toString());
    SqlSession sqlSession = null;
    try {
      sqlSession = MyBatisUtil.getSqlSession();
      SysUserMapper userMapper = sqlSession.getMapper(SysUserMapper.class);
      userMapper.changePassword(user);
      sqlSession.commit();
    } catch (Exception e) {
      LOG.error(e.getMessage(), e);
      throw new Exception(e);
    } finally {
      sqlSession.close();
    }
    return true;
  }
}
