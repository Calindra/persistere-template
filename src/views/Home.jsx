<Window>
	<View>
    <Illustration height={200} image={require('../assets/images/icon_ame.svg')}/>
    <Header textAlign="center">Boilerplate Mini App</Header>
    <Spacing size="lg" />
    <ListView items={this.state.links} onItemSelect={this.navigateTo} />
  </View>
</Window>
