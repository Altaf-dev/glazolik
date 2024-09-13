$(function () {
    $(".bb-custom-wrapper").each(function () {
        var $self = $(this);
        $self.attr("data-index", 0);
        var config = {
            $bookBlock: $(this).find('.bb-bookblock'),
            $navNext: $(this).find('.bb-nav-next'),
            $navPrev: $(this).find('.bb-nav-prev'),
            count: 0
        };

        config.$bookBlock.bookblock({
            speed: 800,
            shadowSides: 0.8,
            shadowFlip: 0.7
        });

        config.$navNext.on('click touchstart', function () {
            config.$bookBlock.bookblock('next');
            config.count++;
            if (config.count > $self.find(".bb-item").length - 1) config.count = $self.find(".bb-item").length - 1;
            $self.attr("data-index", config.count);
            updateHeight($self.parent().parent(), true);
            return false;
        });

        config.$navPrev.on('click touchstart', function () {
            config.$bookBlock.bookblock('prev');
            config.count--;
            if (config.count < 0) config.count = 0;
            $self.attr("data-index", config.count);
            updateHeight($self.parent().parent(), true);
            return false;
        });

        var $slides = config.$bookBlock.children();
        $slides.on({
            'swipeleft': function (event) {
                config.$bookBlock.bookblock('next');
                if (config.count > $self.find(".bb-item").length - 1) config.count = $self.find(".bb-item").length - 1;
                $self.attr("data-index", config.count);
                updateHeight($self.parent().parent(), true);
                return false;
            },
            'swiperight': function (event) {
                config.$bookBlock.bookblock('prev');
                if (config.count < 0) config.count = 0;
                $self.attr("data-index", config.count);
                updateHeight($self.parent().parent(), true);
                return false;
            }
        });
    });
});