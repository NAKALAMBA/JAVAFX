import java.io.File;
import java.io.FileOutputStream;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.layout.CornerRadii;
import javafx.geometry.Pos;
import javafx.animation.KeyFrame;
import javafx.animation.KeyValue;
import javafx.animation.Timeline;
import javafx.util.Duration;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.scene.paint.Color;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.control.TextField;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.control.*;
import javafx.collections.*;
import javafx.scene.control.ToggleGroup;
import javafx.scene.control.RadioButton;
import javafx.scene.control.Spinner;
import javafx.scene.control.SpinnerValueFactory.IntegerSpinnerValueFactory;
import javafx.scene.control.Alert.AlertType;

public class Main extends Application {
    
    
    @Override
    public void start(Stage st) {
        //Main Page
       Stage st1 = new Stage();
        GridPane gp = new GridPane();
       gp.setAlignment(Pos.BASELINE_CENTER); 
       gp.setHgap(10);
       gp.setVgap(60);
       gp.setPadding(new Insets(20, 10, 10,330));

       Scene sc = new Scene(gp,500,400);
       st.setScene(sc);
       st.show();
       Stop[] stops = new Stop[] { new Stop(0, Color.YELLOW), new Stop(1, Color.ORANGE)};
       LinearGradient lg1 = new LinearGradient(0, 0, 1, 0, true, CycleMethod.NO_CYCLE, stops);
       Font f1 = Font.font("Times New Roman",FontWeight.EXTRA_BOLD,20);
       
        Duration startDuration = Duration.ZERO;
        Duration endDuration = Duration.seconds(10);
        Text text = new Text("Welcome to ticket booking!");
        
        text.setFont(Font.font("Times New Roman",40));
        
        double sceneWidth = sc.getWidth();
        double textWidth = text.getLayoutBounds().getWidth();

        KeyValue startKeyValue = new KeyValue(text.translateXProperty(), sceneWidth);
        KeyFrame startKeyFrame = new KeyFrame(startDuration, startKeyValue);
        KeyValue endKeyValue = new KeyValue(text.translateXProperty(), -1.0 * textWidth);
        KeyFrame endKeyFrame = new KeyFrame(endDuration, endKeyValue);

        Timeline timeline = new Timeline(startKeyFrame, endKeyFrame);       
        timeline.setCycleCount(100);
        timeline.play();
        
        BackgroundFill bf = new BackgroundFill(lg1,CornerRadii.EMPTY,Insets.EMPTY);
        gp.setBackground(new Background(bf));
        
        Alert ar = new Alert(AlertType.ERROR);
        
        
       Stop[] stops1 = new Stop[] { new Stop(0, Color.AQUA), new Stop(1, Color.VIOLET)};
       LinearGradient lg2 = new LinearGradient(0, 0, 1, 0, true, CycleMethod.NO_CYCLE, stops1);
       BackgroundFill bf1 = new BackgroundFill(lg2,CornerRadii.EMPTY,Insets.EMPTY);
       
       Stop[] stops2 = new Stop[] { new Stop(0, Color.rgb(120,255,0)), new Stop(1, Color.DARKTURQUOISE)};
       LinearGradient lg3 = new LinearGradient(0, 0, 1, 0, true, CycleMethod.NO_CYCLE, stops2);
       BackgroundFill bf2 = new BackgroundFill(lg3,CornerRadii.EMPTY,Insets.EMPTY);
       
      //Train  
       Button tb = new Button("Train");
       tb.setFont(f1);
        EventHandler<ActionEvent> te = new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e)
            {
                Font f2 = Font.font("Times New Roman",17);
                Label tpd = new Label("Passenger Details");
                tpd.setTranslateX(100);
                tpd.setTranslateY(40);
                Label tl1 = new Label("Name: ");
                TextField ttf1 = new TextField();
                
                Label tl2 = new Label("Email: ");
                TextField ttf2 = new TextField();
                
                Label tl3 = new Label("Phone Number:");
                TextField ttf3 = new TextField();
                
                Label tag = new Label("Age: ");
                tag.setFont(f2);

                Spinner <Integer> tsp = new Spinner<Integer>();
                SpinnerValueFactory <Integer> tsp1 = new SpinnerValueFactory.IntegerSpinnerValueFactory(1,100,1);
                tsp.setValueFactory(tsp1);
                
                Button tc = new Button("Continue");
                GridPane tgp = new GridPane();
                
                tc.setFont(f1);
                tc.setStyle("-fx-color:#E291F3;");
                
                tl1.setFont(f2);
                tl2.setFont(f2);
                tl3.setFont(f2);
                tpd.setFont(f1);
                tc.setFont(f1);
                
                ttf1.setFont(f2);
                ttf2.setFont(f2);
                ttf3.setFont(f2);
                
                ttf1.setStyle("-fx-border-color:black;");
                ttf2.setStyle("-fx-border-color:black;");
                ttf3.setStyle("-fx-border-color:black;");
                
                tgp.setAlignment(Pos.TOP_CENTER);
                tgp.add(tpd, 0, 0, 2, 1);
                tgp.addRow(2,tl1,ttf1);
                tgp.addRow(3,tl2,ttf2);
                tgp.addRow(4,tl3,ttf3);
                tgp.addRow(5,tag,tsp);
                tgp.add(tc, 1, 6,2,1);
                tgp.setHgap(20);
                tgp.setVgap(30);
                
                tgp.setBackground(new Background(bf1));
                
                Stage tst = new Stage();
                Scene tsc = new Scene(tgp,500,500);
                tst.setScene(tsc);
                tst.show();
                tst.setTitle("Train Booking");
                st.hide();
                st1.hide();
                
                EventHandler<ActionEvent> tevent = new EventHandler<ActionEvent>(){
                        public void handle(ActionEvent e)
                        {
                            Font f3 = Font.font("Times New Roman",17);
                            Stage tst1 = new Stage();
                            Label ttd =  new Label("Train Details");
                            ttd.setFont(Font.font("Times New Roman",FontWeight.BOLD,25));
                            
                            Label ss = new Label("Start Station:");
                            ss.setFont(f3);
                            
                            Label es = new Label("End Station:");
                            es.setFont(f3);
                            
                            String start[] = {"Mumbai","Chennai","Delhi","Bengalore","Kolkata"};
                            ComboBox starts = new ComboBox(FXCollections.observableArrayList(start));
                            starts.setStyle("-fx-font:16px \"Times New Roman\";");
                            
                            String end[] = {"Mumbai","Chennai","Delhi","Bengalore","Kolkata"};
                            ComboBox ends = new ComboBox(FXCollections.observableArrayList(end));
                            ends.setStyle("-fx-font:16px \"Times New Roman\";");
                            
                            Label triptype = new Label("Trip Type:");
                            triptype.setFont(f3);
                            
                            ToggleGroup group = new ToggleGroup();
                            RadioButton r1 = new RadioButton("Single");
                            RadioButton r2 = new RadioButton("Return");
                            r1.setFont(f3);
                            r2.setFont(f3);
                            
                            r1.setToggleGroup(group);
                            r2.setToggleGroup(group);
                            
                            Label dpl = new Label("Date of Journey:");
                            dpl.setFont(f3);
                            DatePicker dp = new DatePicker();
                            dp.setStyle("-fx-font:12px \"Times New Roman\";");
                            
                            Label pt = new Label("People Travelling: ");
                            pt.setFont(f3);
                            
                            Spinner <Integer> sp = new Spinner<Integer>();
                            SpinnerValueFactory <Integer> sp1 = new SpinnerValueFactory.IntegerSpinnerValueFactory(1,100,1);
                            sp.setValueFactory(sp1);
                            Button fb1 = new Button("Generate Ticket");
                            fb1.setFont(Font.font("Times New Roman",FontWeight.EXTRA_BOLD,20));
                            fb1.setStyle("-fx-color:#E291F3;");
                            
                            GridPane tgp2 = new GridPane();
                            tgp2.setVgap(20);
                            tgp2.setAlignment(Pos.TOP_CENTER);
                            tgp2.setBackground(new Background(bf1));
                            
                            tgp2.add(ttd,1,0,2,1);
                            tgp2.addRow(1, ss,starts);
                            tgp2.addRow(2, es,ends);
                            tgp2.add(triptype, 0, 3);
                            tgp2.add(r1,1,3);
                            tgp2.add(r2,2,3);
                                    
                            tgp2.addRow(4, dpl,dp);
                            tgp2.addRow(5, pt,sp);
                            tgp2.add(fb1, 1, 6,2,1);
                            Scene tsc1 = new Scene(tgp2,500,500);
                            tst1.setScene(tsc1);
                            tst1.setTitle("Train Booking");
                            tst1.show();
                            tst.hide();
                            
                            EventHandler<ActionEvent> fe1 = new EventHandler<ActionEvent>(){  
                                public void handle(ActionEvent e)
                                {
                                    if(starts.getValue()==ends.getValue())
                                    {
                                        ar.setAlertType(AlertType.ERROR);
                                        ar.setContentText("Start and End Station cannot be the same.");
                                        ar.show();
                                    }
                                    else
                                    {
                                    Font f4 = Font.font("Times New Roman",FontWeight.BOLD,16);
                                    Stage tst2 = new Stage();
                                    Label ftrain = new Label("Ticket Details");
                                    ftrain.setFont(Font.font("Times New Roman",FontWeight.EXTRA_BOLD,22));
                                    
                                    GridPane fgp1 = new GridPane();
                                    fgp1.setHgap(10);
                                    fgp1.setVgap(20);
                                    
                                    fgp1.setAlignment(Pos.TOP_CENTER);
                                    Label ftn = new Label("Name: "+ttf1.getText());
                                    ftn.setFont(f4);
                                    
                                    Label fte = new Label("Email: "+ttf2.getText());
                                    fte.setFont(f4);
                                    
                                    Label ftphn = new Label("Phone Number: "+ttf3.getText());
                                    ftphn.setFont(f4);
                                    
                                    Label ftage = new Label("Age: "+tsp.getValue());
                                    ftage.setFont(f4);
                                    
                                    Label ftstart = new Label("Start Station: "+starts.getValue());
                                    ftstart.setFont(f4);
                                    
                                    Label ftend = new Label("End Station: "+ends.getValue());
                                    ftend.setFont(f4);
                                    
                                    String tt="";
                                    int c=1;
                                    if(r1.isSelected())
                                    {
                                        tt="Single";
                                        c=1;
                                    }
                                    else if(r2.isSelected())
                                    {
                                        tt="Return";
                                        c=2;
                                    }
                                    Label fttt = new Label("Trip type: "+tt);
                                    fttt.setFont(f4);
                                    
                                    Label ftdt = new Label("Date of Journey: "+dp.getValue());
                                    ftdt.setFont(f4);
                                    
                                    Label ftp = new Label("Number of people: "+sp1.getValue());
                                    ftp.setFont(f4);
                                    
                                    int a=1,b=1;
                                    for(int i=1;i<=5;i++)
                                    {
                                        if(starts.getValue()==start[i-1])
                                        {
                                            a=i;
                                        }
                                        if(ends.getValue()==end[i-1])
                                        {
                                            b=i;
                                        }
                                    }
                                    int d = sp.getValue();
                                    int total;
                                    total = 500*c*(b-a)*d;
                                    Label traincost = new Label("Total Cost: "+total);
                                    traincost.setFont(f4);
                                    
                                    Button cs1 = new Button("Close");
                                    cs1.setFont(f1);
                                    cs1.setStyle("-fx-color:#E291F3;");
                                    EventHandler<ActionEvent> close1 = new EventHandler<ActionEvent>(){
                                        public void handle(ActionEvent e)
                                        {
                                            tst2.hide();
                                        }
                                    };
                                    cs1.setOnAction(close1);
                                    fgp1.setBackground(new Background(bf1));

                                    fgp1.addRow(0,ftrain);
                                    fgp1.addRow(1, ftn);
                                    fgp1.addRow(2, fte);
                                    fgp1.addRow(3, ftphn);
                                    fgp1.addRow(4, ftage);
                                    fgp1.addRow(5, ftstart);
                                    fgp1.addRow(6, ftend);
                                    fgp1.addRow(7, fttt);
                                    fgp1.addRow(8, ftdt);
                                    fgp1.addRow(9, ftp);
                                    fgp1.addRow(10,traincost);
                                    fgp1.addRow(11, cs1);
                                    Scene tsc2 = new Scene(fgp1,500,500);
                                    
                                    tst2.setScene(tsc2);
                                    tst2.show();
                                    tst1.hide();
                                    tst2.setTitle("Final Ticket");
                                    }
                                    
                                }
                            };
                            fb1.setOnAction(fe1);
                        }
                };
                
                tc.setOnAction(tevent);
            }
        };
        
        tb.setOnAction(te);
        
        
        //Plane
        Button pb = new Button("Plane");
        pb.setFont(f1);
        EventHandler<ActionEvent> pe = new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e)
            {
                Font f2 = Font.font("Times New Roman",17);
                Label tpd = new Label("Passenger Details");
                tpd.setTranslateX(100);
                tpd.setTranslateY(40);
                Label tl1 = new Label("Name: ");
                TextField ttf1 = new TextField();
                
                Label tl2 = new Label("Email: ");
                TextField ttf2 = new TextField();
                
                Label tl3 = new Label("Phone Number:");
                TextField ttf3 = new TextField();
                
                Label pag = new Label("Age: ");
                pag.setFont(f2);

                Spinner <Integer> psp = new Spinner<Integer>();
                SpinnerValueFactory <Integer> psp1 = new SpinnerValueFactory.IntegerSpinnerValueFactory(1,100,1);
                psp.setValueFactory(psp1);
                
                Button tc = new Button("Continue");
                GridPane tgp = new GridPane();
                
                tc.setFont(f1);
                tc.setStyle("-fx-color:#048C72;");
                
                tl1.setFont(f2);
                tl2.setFont(f2);
                tl3.setFont(f2);
                tpd.setFont(f1);
                tc.setFont(f1);
                
                ttf1.setFont(f2);
                ttf2.setFont(f2);
                ttf3.setFont(f2);
                
                ttf1.setStyle("-fx-border-color:black;");
                ttf2.setStyle("-fx-border-color:black;");
                ttf3.setStyle("-fx-border-color:black;");
                
                tgp.setAlignment(Pos.TOP_CENTER);
                tgp.add(tpd, 0, 0, 2, 1);
                tgp.addRow(2,tl1,ttf1);
                tgp.addRow(3,tl2,ttf2);
                tgp.addRow(4,tl3,ttf3);
                tgp.addRow(5,pag,psp);
                tgp.add(tc, 1, 6,2,1);
                tgp.setHgap(20);
                tgp.setVgap(30);
                
                tgp.setBackground(new Background(bf2));
                
                Stage tst = new Stage();
                Scene tsc = new Scene(tgp,500,500);
                tst.setScene(tsc);
                tst.show();
                tst.setTitle("Plane Booking");
                st.hide();
                st1.hide();
                
                EventHandler<ActionEvent> tevent = new EventHandler<ActionEvent>(){
                        public void handle(ActionEvent e)
                        {
                            Font f3 = Font.font("Times New Roman",17);
                            Stage tst1 = new Stage();
                            Label ttd =  new Label("Plane Details");
                            ttd.setFont(Font.font("Times New Roman",FontWeight.BOLD,25));
                            
                            Label ss = new Label("Origin:");
                            ss.setFont(f3);
                            
                            Label es = new Label("Destination:");
                            es.setFont(f3);
                            
                            String ori[] = {"New York","Sydney","London","Dubai","Frankfurt"};
                            ComboBox starts = new ComboBox(FXCollections.observableArrayList(ori));
                            starts.setStyle("-fx-font:16px \"Times New Roman\";");
                            
                            String des[] = {"New York","Sydney","London","Dubai","Frankfurt"};
                            ComboBox ends = new ComboBox(FXCollections.observableArrayList(des));
                            ends.setStyle("-fx-font:16px \"Times New Roman\";");
                            
                            Label triptype = new Label("Trip Type:");
                            triptype.setFont(f3);
                            
                            ToggleGroup group = new ToggleGroup();
                            RadioButton r1 = new RadioButton("One Way");
                            RadioButton r2 = new RadioButton("Two Way");
                            r1.setFont(f3);
                            r2.setFont(f3);
                            
                            r1.setToggleGroup(group);
                            r2.setToggleGroup(group);
                            
                            Label classtype = new Label("Class:");
                            classtype.setFont(f3);
                            
                            ToggleGroup group1 = new ToggleGroup();
                            RadioButton r3 = new RadioButton("Economy");
                            RadioButton r4 = new RadioButton("Business");
                            r3.setFont(f3);
                            r4.setFont(f3);
                            
                            r3.setToggleGroup(group1);
                            r4.setToggleGroup(group1);
                            
                            Label dpl = new Label("Date of Journey:");
                            dpl.setFont(f3);
                            DatePicker dp = new DatePicker();
                            dp.setStyle("-fx-font:12px \"Times New Roman\";");
                            
                            Label pt = new Label("People Travelling: ");
                            pt.setFont(f3);
                            
                            Spinner <Integer> sp = new Spinner<Integer>();
                            SpinnerValueFactory <Integer> sp1 = new SpinnerValueFactory.IntegerSpinnerValueFactory(1,100,1);
                            sp.setValueFactory(sp1);
                            Button fb1 = new Button("Generate Ticket");
                            fb1.setFont(Font.font("Times New Roman",FontWeight.EXTRA_BOLD,20));
                            fb1.setStyle("-fx-color:#048C72;");
                            
                            GridPane tgp2 = new GridPane();
                            tgp2.setVgap(20);
                            tgp2.setAlignment(Pos.TOP_CENTER);
                            tgp2.setBackground(new Background(bf2));
                            
                            tgp2.add(ttd,1,0,2,1);
                            tgp2.addRow(1, ss,starts);
                            tgp2.addRow(2, es,ends);
                            tgp2.add(triptype, 0, 3);
                            tgp2.add(r1,1,3);
                            tgp2.add(r2,2,3);
                            
                            tgp2.add(classtype, 0, 4);
                            tgp2.add(r3,1,4);
                            tgp2.add(r4,2,4);
                                    
                            tgp2.addRow(5, dpl,dp);
                            tgp2.addRow(6, pt,sp);
                            tgp2.add(fb1, 1, 7,2,1);
                            Scene tsc1 = new Scene(tgp2,500,500);
                            tst1.setScene(tsc1);
                            tst1.setTitle("Plane Booking");
                            tst1.show();
                            tst.hide();
                            
                            EventHandler<ActionEvent> fe1 = new EventHandler<ActionEvent>(){  
                                public void handle(ActionEvent e)
                                {
                                    
                                    if(starts.getValue()==ends.getValue())
                                    {
                                        ar.setAlertType(AlertType.ERROR);
                                        ar.setContentText("Origin and Destination cannot be the same.");
                                        ar.show();
                                    }
                                    else
                                    {
                                    Font f4 = Font.font("Times New Roman",FontWeight.BOLD,16);
                                    Stage tst2 = new Stage();
                                    Label ftrain = new Label("Ticket Details");
                                    ftrain.setFont(Font.font("Times New Roman",FontWeight.EXTRA_BOLD,22));
                                    
                                    GridPane fgp1 = new GridPane();
                                    fgp1.setHgap(10);
                                    fgp1.setVgap(20);
                                    
                                    fgp1.setAlignment(Pos.TOP_CENTER);
                                    Label ftn = new Label("Name: "+ttf1.getText());
                                    ftn.setFont(f4);
                                    
                                    Label fte = new Label("Email: "+ttf2.getText());
                                    fte.setFont(f4);
                                    
                                    Label ftphn = new Label("Phone Number: "+ttf3.getText());
                                    ftphn.setFont(f4);
                                    
                                    Label ftage = new Label("Age: "+psp1.getValue());
                                    ftage.setFont(f4);
                                    
                                    Label ftstart = new Label("Origin: "+starts.getValue());
                                    ftstart.setFont(f4);
                                    
                                    Label ftend = new Label("Destination: "+ends.getValue());
                                    ftend.setFont(f4);
                                    
                                    String tt="";
                                    int c=1;
                                    if(r1.isSelected())
                                    {
                                        tt="Single";
                                        c=1;
                                    }
                                    else if(r2.isSelected())
                                    {
                                        tt="Return";
                                        c=2;
                                    }
                                    
                                    String ct="";
                                    int f=1;
                                    if(r3.isSelected())
                                    {
                                        tt="Economy";
                                        f=1;
                                    }
                                    else if(r4.isSelected())
                                    {
                                        tt="Business";
                                        f=5;
                                    }
                                    Label fttt = new Label("Trip type: "+tt);
                                    fttt.setFont(f4);
                                    
                                    Label ctl = new Label("Class: "+ct);
                                    ctl.setFont(f4);
                                    
                                    Label ftdt = new Label("Date of Journey: "+dp.getValue());
                                    ftdt.setFont(f4);
                                    
                                    Label ftp = new Label("Number of people: "+sp1.getValue());
                                    ftp.setFont(f4);
                                    
                                    int a=1,b=1;
                                    for(int i=1;i<=5;i++)
                                    {
                                        if(starts.getValue()==ori[i-1])
                                        {
                                            a=i;
                                        }
                                        if(ends.getValue()==des[i-1])
                                        {
                                            b=i;
                                        }
                                    }
                                    int d = sp.getValue();
                                    int total;
                                    total = 500*c*(b-a)*d*f*80;
                                    Label traincost = new Label("Total Cost: "+total);
                                    traincost.setFont(f4);
                                    
                                    Button cs1 = new Button("Close");
                                    cs1.setFont(f1);
                                    cs1.setStyle("-fx-color:#048C72;");
                                    EventHandler<ActionEvent> close1 = new EventHandler<ActionEvent>(){
                                        public void handle(ActionEvent e)
                                        {
                                            tst2.hide();
                                        }
                                    };
                                    cs1.setOnAction(close1);
                                    fgp1.setBackground(new Background(bf2));

                                    fgp1.addRow(0,ftrain);
                                    fgp1.addRow(1, ftn);
                                    fgp1.addRow(2, fte);
                                    fgp1.addRow(3, ftphn);
                                    fgp1.addRow(4, ftage);
                                    fgp1.addRow(5, ftstart);
                                    fgp1.addRow(6, ftend);
                                    fgp1.addRow(7, fttt);
                                    fgp1.addRow(8,ctl);
                                    fgp1.addRow(9, ftdt);
                                    fgp1.addRow(10, ftp);
                                    fgp1.addRow(11,traincost);
                                    fgp1.addRow(12, cs1);
                                    Scene tsc2 = new Scene(fgp1,550,550);
                                    tst2.setTitle("Final Ticket");
                                    
                                    tst2.setScene(tsc2);
                                    tst2.show();
                                    tst1.hide();
                                    }
                                    
                                    
                                }
                            };
                            fb1.setOnAction(fe1);
                        }
                };
                
                tc.setOnAction(tevent);
            }
        };
        
        pb.setOnAction(pe);
               
        
       //Start Button
       Button sb = new Button("Book Tickets");

       EventHandler<ActionEvent> startevent = new EventHandler<ActionEvent>() {
        public void handle(ActionEvent e)
        {
            Text text1 = new Text("Select your mode");
            text1.setFont(Font.font("Times New Roman",40));
            text1.setFill(Color.RED);
            
            GridPane gp1 =  new GridPane();
            gp1.addRow(0, text1);
            gp1.addRow(1,tb,pb);
            
            tb.setStyle("-fx-color:#71FF02;");
            pb.setStyle("-fx-color:#71FF02;");
            
            gp1.setHgap(-120);
            gp1.setVgap(40);
            gp1.setPadding(new Insets(0, 0, 0, 0));
            gp1.setAlignment(Pos.TOP_CENTER); 
            Scene sc1 = new Scene(gp1,500,400);
            double sw = sc1.getWidth();
            double tw = text1.getLayoutBounds().getWidth();
            Duration startDuration1 = Duration.ZERO;
            Duration endDuration1 = Duration.seconds(10);

            KeyValue startKeyValue1 = new KeyValue(text1.translateXProperty(), sw);
            KeyFrame startKeyFrame1 = new KeyFrame(startDuration1, startKeyValue1);
            KeyValue endKeyValue1 = new KeyValue(text1.translateXProperty(), -1.0 * tw);
            KeyFrame endKeyFrame1 = new KeyFrame(endDuration1, endKeyValue1);

            Timeline timeline1 = new Timeline(startKeyFrame1, endKeyFrame1);       
            timeline1.setCycleCount(100);
            timeline1.play();
            
            gp1.setBackground(new Background(bf));
            
            st1.setScene(sc1);
            st1.show();
            st1.setTitle("Choose Mode");
            st.hide();
            
        }
       };
       
       sb.setOnAction(startevent);
       sb.setFont(f1);
       
       text.setFill(Color.RED);

        gp.addRow(0,text);
        gp.addRow(1,sb);
        sb.setStyle("-fx-color:#71FF02;");
        st.setTitle("Ticket Booking");
    }
    public static void main(String args[]) {
        launch(args);
    }


}
