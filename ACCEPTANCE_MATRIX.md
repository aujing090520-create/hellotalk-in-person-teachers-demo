| Area | Source | Required Checks | Result | Evidence |
| --- | --- | --- | --- | --- |
| Product goal | FR-001 / FR-002 | 当前城市面授老师入口不干扰普通语伴列表 | PASS | 深圳展示横滑模块；广州隐藏模块 |
| Business flow | FR-002–FR-006 | 供给门槛、VIP 平权、地图抽屉、空筛选状态齐全 | PASS | Demo 数据：深圳 5 位、广州 3 位；侧栏可切换 VIP |
| Page completeness | `partner.home.default` / `profile.public.default` | 附近页、HT 公共 Profile、课程列表/详情/预约、地图抽屉均存在 | PASS | 头像进入 Profile；原生 Profile 结构内新增课程区 |
| Navigation | FR-003 / FR-004 | 头像跳转、返回、更多打开/关闭、课程列表/详情/预约回退、城市切换重复可用 | PASS | Playwright 11:16–11:18 完整课程预约回路 |
| Interaction | FR-004 / FR-005 | 搜索、筛选、地图标记与场所卡联动 | PASS | 地图抽屉展示 6 个深圳场所及筛选按钮 |
| Visual system | HelloTalk design system | 375x812、紧凑列表、紫色主操作、白色底部抽屉 | PASS | `styles.css` tokens and mobile canvas |
| Motion and feedback | Motion guidelines | 抽屉从底部短动效出现，reduced-motion 下无位移动画 | PASS | `.map-sheet` / `prefers-reduced-motion` |
| Robustness | Playwright + build | 构建通过、无 favicon 404、城市菜单不串层 | PASS | `npm run build`; 11:18 Profile Tab 状态 |

## 已知待接入

- 场所审核、课程有效期、精确地理权限及后端数据契约仍待确认。
