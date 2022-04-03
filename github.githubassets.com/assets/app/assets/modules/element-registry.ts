import { whenSeen } from "./github/behaviors/dynamic-elements";
whenSeen('auto-playable', () => import('/workspace/github/app/components/accessibility/auto-playable-element.ts'))
whenSeen('launch-code', () => import('/workspace/github/app/components/account_verifications/launch-code-element.ts'))
whenSeen('metric-selection', () => import('/workspace/github/app/components/advisories/metric-selection-element.ts'))
whenSeen('severity-calculator', () => import('/workspace/github/app/components/advisories/severity-calculator-element.ts'))
whenSeen('sku-list', () => import('/workspace/github/app/components/codespaces/advanced_options/sku-list-element.ts'))
whenSeen('command-palette-page', () => import('/workspace/github/app/components/command_palette/command-palette-page-element.ts'))
whenSeen('command-palette-page-stack', () => import('/workspace/github/app/components/command_palette/command-palette-page-stack-element.ts'))
whenSeen('command-palette-pjax-metadata', () => import('/workspace/github/app/components/command_palette/command-palette-pjax-metadata-element.ts'))
whenSeen('readme-toc', () => import('/workspace/github/app/components/files/readme-toc-element.ts'))
whenSeen('delayed-loading', () => import('/workspace/github/app/components/github/delayed-loading-element.ts'))
whenSeen('feature-callout', () => import('/workspace/github/app/components/github/feature-callout-element.ts'))
whenSeen('reopen-button', () => import('/workspace/github/app/components/issues/reopen-button-element.ts'))
whenSeen('codespaces-policy-form', () => import('/workspace/github/app/components/organizations/settings/codespaces-policy-form-element.ts'))
whenSeen('action-list', () => import('/workspace/github/app/components/primer/action_list/action-list-element.ts'))
whenSeen('navigation-list', () => import('/workspace/github/app/components/primer/action_list/navigation-list-element.ts'))
whenSeen('action-menu', () => import('/workspace/github/app/components/primer/action_menu/action-menu-element.ts'))
whenSeen('iterate-focusable-elements.ts', () => import('/workspace/github/app/components/primer/modal_dialog/iterate-focusable-elements.ts'))
whenSeen('modal-dialog', () => import('/workspace/github/app/components/primer/modal_dialog/modal-dialog-element.ts'))
whenSeen('file-filter', () => import('/workspace/github/app/components/pull_requests/file_tree/file-filter-element.ts'))
whenSeen('file-tree', () => import('/workspace/github/app/components/pull_requests/file_tree/file-tree-element.ts'))
whenSeen('file-tree-toggle', () => import('/workspace/github/app/components/pull_requests/file_tree/file-tree-toggle-element.ts'))
whenSeen('memex-project-picker', () => import('/workspace/github/app/components/repositories/memex/memex-project-picker-element.ts'))
whenSeen('project-picker', () => import('/workspace/github/app/components/sidebar/project-picker-element.ts'))
whenSeen('monthly-spend-graph', () => import('/workspace/github/app/components/sponsors/orgs/premium_dashboard/monthly-spend-graph-element.ts'))
whenSeen("profile-pins", () => import("./github/profile/profile-pins-element"));
whenSeen("emoji-picker", () => import("./github/emoji-picker-element"));
whenSeen("edit-hook-secret", () => import("./github/behaviors/edit-hook-secret-element"));
whenSeen("insights-query", () => import("./github/insights/insights-query"));
whenSeen("remote-clipboard-copy", () => import("./github/behaviors/remote-clipboard-copy"));
whenSeen("series-table", () => import("./github/insights/series-table"));
whenSeen("line-chart", () => import("./github/insights/line-chart"));
whenSeen("bar-chart", () => import("./github/insights/bar-chart"));
whenSeen("column-chart", () => import("./github/insights/column-chart"));
whenSeen("stacked-area-chart", () => import("./github/insights/stacked-area-chart"));
whenSeen("presence-avatars", () => import("./github/presence/presence-avatars"));
whenSeen("pulse-authors-graph", () => import("./github/graphs/pulse-authors-graph-element"));
whenSeen("stacks-input-config-view", () => import("./github/stacks/stacks-input-config-view"));
whenSeen("community-contributions-graph", () => import("./github/graphs/community-contributions"));
whenSeen("discussion-page-views-graph", () => import("./github/graphs/discussion-page-views"));
whenSeen("discussions-daily-contributors", () => import("./github/graphs/discussions-daily-contributors"));
whenSeen("discussions-new-contributors", () => import("./github/graphs/discussions-new-contributors"));
whenSeen("code-frequency-graph", () => import("./github/graphs/code-frequency-graph-element"));
whenSeen("contributors-graph", () => import("./github/graphs/contributors-graph-element"));
whenSeen("org-insights-graph", () => import("./github/graphs/org-insights-graph-element"));
whenSeen("traffic-clones-graph", () => import("./github/graphs/traffic-clones-graph-element"));
whenSeen("traffic-visitors-graph", () => import("./github/graphs/traffic-visitors-graph-element"));
whenSeen("commit-activity-graph", () => import("./github/graphs/commit-activity-graph-element"));
whenSeen("marketplace-insights-graph", () => import("./github/graphs/marketplace-insights-graph-element"));
whenSeen("user-sessions-map", () => import("./github/settings/user-sessions-map-element"));
whenSeen("reload-after-polling", () => import("./github/behaviors/reload-after-polling-element"));
whenSeen("package-dependencies-security-graph", () => import("./github/graphs/package-dependencies-security-graph-element"));
whenSeen(".js-sub-dependencies", () => import("./github/dependencies"));
whenSeen("network-graph", () => import("./github/graphs/network-graph-element"));
whenSeen("business-audit-log-map", () => import("./github/business-audit-log-map-element"));
whenSeen("inline-machine-translation", () => import("./github/localization/inline-machine-translation-element"));
