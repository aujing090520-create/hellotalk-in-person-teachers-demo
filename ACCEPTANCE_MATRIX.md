| Area | PRD V1.1 source | Required checks | Evidence surface |
| --- | --- | --- | --- |
| Nearby teachers | FR-001 | 仅展示认证且有在售线下课程的老师；同城人数不满足时模块不占位 | 找语伴页 |
| Global in-person map | FR-002 | 可切换有课城市；按可约时间、课程语言筛选；同地点多课聚合；不提供关键词搜索 | 找语伴页 → 面授场所 |
| Teacher-focused map | FR-003 | 仅展示当前老师、当前城市的在售线下课程和地点；不显示城市切换、全局筛选与其他老师课程 | Profile → 城市/地点入口 |
| Teacher profile | FR-004 / FR-005 / FR-006 / FR-007 | 认证身份、城市信息、个人照片、试听课位于面授课程上方；预约后主操作切为咨询 | 老师 Profile |
| Course cards & pricing | FR-006 / FR-008 / FR-009 | 列表、Profile、详情字段一致；单节首购价与课包总价/单节均价语义准确；无优惠不显示划线价 | Profile、课程列表、详情页 |
| Offline booking | FR-010 / FR-011 | 日期切换后仅显示该日期配置的时段；无时段不可继续支付；成功页可联系老师 | 课程详情 → 确认预约 → 支付 |
| Trial purchase & playback | FR-005 / FR-012 / FR-013 / FR-014 | 未购买可支付；购买后卡片、详情直接进入视频页；视频页包含返回、播放/暂停和进度示意 | 试听课卡片、详情、视频页 |
| My courses & lifecycle | FR-015 / FR-016 / FR-017 / FR-018 | 有课/无课预设正确；线下课/试听课 Tab；上架、下架、重新上架、删除影响对应列表 | 我的课程、编辑课程 |
| Course creation & edit | FR-019 / FR-020 / FR-021 / FR-022 / FR-023 | 仅线下课/试听课；线下课必须地点+时段；地点最多 3 处；售价校验阻止不合理提交 | 创建/编辑课程 |
| Feedback & accessibility | 全局 | 页面操作有可见反馈；返回链路不回到无关顶部；桌面验证以 375×812 移动画布为准 | 全流程 |

## 本轮验证边界

- 本地静态检查：`node --check app.js`、`git diff --check`。
- 发布后以 `in-person-teachers-scene-manifest-v1.1.md` 与 `demo-prd-copy-closure.json` 回查主流程；对应飞书文档为《附近认证老师》。
- 场所审核、课程有效期、精确地理权限及真实后端数据契约不属于本 Demo。
