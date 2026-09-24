| Area | PRD V1.1 source | Required checks | Evidence surface |
| --- | --- | --- | --- |
| Teacher profile | FR-001 | 认证面授身份、城市信息、个人照片、试听课位于面授课程上方；预约后主操作切为咨询 | 老师 Profile |
| Course cards & pricing | FR-002 / FR-006 | 列表、Profile、详情字段一致；单节首购价与课包总价/单节均价语义准确；无优惠不显示划线价 | Profile、课程列表、详情页 |
| Offline booking | FR-003 / FR-010 | 日期切换后仅显示该日期配置的时段；无时段不可继续支付；成功页可联系老师 | 课程详情 → 确认预约 → 支付 |
| Trial purchase & playback | FR-004 / FR-005 / FR-015 | 未购买可支付；购买后卡片、详情直接进入视频页；视频页包含返回、播放/暂停和进度示意 | 试听课卡片、详情、视频页 |
| Nearby teachers & map | FR-013 / FR-014 | 仅展示认证且在售面授老师；同城数量不足 4 隐藏；地图支持城市、筛选、搜索、地点与老师联动 | 找语伴页、地图抽屉 |
| My courses & lifecycle | FR-007 / FR-012 / FR-016 | 有课/无课预设正确；线下课/试听课 Tab；上架、下架、重新上架、删除影响对应列表 | 我的课程、编辑课程 |
| Course creation & edit | FR-008 / FR-009 / FR-011 | 仅线下课/试听课；线下课必须地点+时段；地点最多 3 处；售价校验阻止不合理提交 | 创建/编辑课程 |
| Feedback & accessibility | 全局 | 页面操作有可见反馈；返回链路不回到无关顶部；桌面验证以 375×812 移动画布为准 | 全流程 |

## 本轮验证边界

- 本地静态检查：`node --check app.js`、`git diff --check`。
- 发布后需按上表截取主流程画布并回传至《附近认证老师-面授课程与试听课 PRD V1.1》。
- 场所审核、课程有效期、精确地理权限及真实后端数据契约不属于本 Demo。
