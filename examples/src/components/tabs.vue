<template>
    <div>
        <m-tabs v-model="currentTub">
            <m-tab :tab="{ title: 'Jon', id: 'tab-1' }">
                <p>
                    Hello 1
                </p>
            </m-tab>
            <m-tab :tab="{ title: 'Tom', id: 'tab-2' }">
                <p>
                    Hello 2
                </p>
            </m-tab>

        </m-tabs>

        <br>
        <br>



        <m-tabs v-model="currentTub2" :no-ripple-effect="true" :animation="true" :content-style="{height: '300px'}">
            <m-tab tab="Tab 1">
                <p style="min-height: 250px; background: #fafafa; padding: 10px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem.<br>
                    Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, <br>
                    tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi.<br>
                    Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos.

                </p>
            </m-tab>
            <m-tab tab="Tab 2">
                <p style="min-height: 250px; background: #333; color: #fff; padding: 10px;">
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                </p>
            </m-tab>

            <m-tab tab="Tab 3">
                <p style="min-height: 250px; background: #3f51b5; color: #fff; padding: 10px;">
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                </p>
            </m-tab>

        </m-tabs>

        <div>
            <div>Code:</div>
            <textarea cols="120" rows="20" :value="examples"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                currentTub: 'tab-1',
                currentTub2: 'Tab 2',
                examples: `
                <m-tabs v-model="currentTub">
                     <m-tab :tab="{ title: 'Title', id: 'tab-1' }">
                        <p>
                            Hello 1
                        </p>
                    </m-tab>
                    <m-tab :tab="{ title: 'Title', id: 'tab-2' }">
                        <p>
                            Hello 2
                        </p>
                    </m-tab>

                </m-tabs>



                <m-tabs v-model="currentTub2" :no-ripple-effect="true" :animation="true" :content-style="{height: '300px'}">
                    // tabs ...
                </m-tabs>
                `,
            }
        }
    }
</script>
