class WOPR {
  constructor() {
    this.SetupCommands();
  }
  
  SetupCommands() {
    const that = this;
    this.commands = {
      'help': this.Help,
      'github': this.Github,
      'linkedin': this.LinkedIn
    }
  }
  
  ProcessCommand(cmd) {
    PrintToTerminal(cmd, true);
    if (cmd in this.commands) {
      this.commands[cmd.toLowerCase()]();
    } else {
      PrintToTerminal(cmd + ': command not found...');
    }
  }

  Help() {
    PrintToTerminal('linkedin : Print information about linkedin.', false);
    PrintToTerminal('github : Print information about Github.', false);
    PrintToTerminal('global-thermonuclear-war : Not yet implemented.', false);
    PrintToTerminal('help : Print this.', false);
  }

  LinkedIn() {
    PrintToTerminal('My linkedin', false);
  }

  Github() {
    PrintToTerminal('<a href="https://github.com/linus-berg">https://github.com/linus-berg</a>', false);
  }
}
