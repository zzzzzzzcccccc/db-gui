const resources = {
  'en-US': {
    translation: {
      no_found: 'No Found',
      settings: 'Settings',
      theme: 'Theme',
      language: 'Language',
      mode: 'Mode',
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto',
      'theme.size': 'UI Size',
      'theme.primary.color': 'Primary Color',
      small: 'Small',
      middle: 'Middle',
      large: 'Large',
      'add.data.connections': 'Add Data Connections',
      connections: 'Connections',
      mysql: 'MySQL',
      postgres: 'Postgres',
      'add.connection.name': 'Name',
      'add.connection.host': 'Host',
      'add.connection.database': 'Database',
      'add.connection.user': 'User',
      'add.connection.password': 'Password',
      'add.connection.port': 'Port',
      'form.input.required': 'Please input the {{ label }}',
      'form.input.number': '{{ label }} must be a number',
      'connection.save': 'Save',
      'connection.failed.title': 'Connection failed',
      'connection.failed.message':
        'Currently unable to connect to the data source, do you want to continue saving this configuration?',
      'sql.run': 'Run',
      columns: 'Columns',
      indexes: 'Indexes',
    },
    displayLang: '🇺🇸 English',
  },
  'zh-CN': {
    translation: {
      no_found: '暂无数据',
      settings: '设置',
      theme: '主题',
      language: '语言',
      mode: '模式',
      light: '明亮',
      dark: '黑暗',
      auto: '自动',
      'theme.size': '界面尺寸',
      'theme.primary.color': '主色调',
      small: '小',
      middle: '中等',
      large: '大',
      'add.data.connections': '添加数据连接',
      connections: '连接',
      mysql: 'MySQL',
      postgres: 'Postgres',
      'add.connection.name': '名称',
      'add.connection.host': '主机',
      'add.connection.database': '数据库',
      'add.connection.user': '用户',
      'add.connection.password': '密码',
      'add.connection.port': '端口',
      'form.input.required': '请输入{{ label }}!',
      'form.input.number': '{{ label }}必须是数字!',
      'connection.save': '保存',
      'connection.failed.title': '连接失败',
      'connection.failed.message': '当前无法连接到数据源，是否继续保存此配置?',
      'sql.run': '运行',
      columns: '列',
      indexes: '索引',
    },
    displayLang: '🇨🇳 简体中文',
  },
}

export default resources
