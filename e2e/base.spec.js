describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  it('should show detail screen after tap', async () => {
    await expect(element(by.id('home_screen'))).toBeVisible();
    await element(by.id('show_detail_button')).tap();
    await expect(element(by.id('detail_screen'))).toBeVisible();
  });
});
